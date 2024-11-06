﻿using BCrypt.Net;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ProjectSem3.Configurations;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Entities;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace ProjectSem3.Service
{
    public class UserService : IUserService
    {
        private readonly ILogger<UserService> _logger;
        private readonly OnlineDvdsContext _context;
        private readonly EmailService _emailService;
        private readonly JwtSettings _jwtSettings;

        public UserService(
            ILogger<UserService> logger,
            OnlineDvdsContext context,
            EmailService emailService,
            IOptions<JwtSettings> jwtSettings)
        {
            _logger = logger;
            _context = context;
            _emailService = emailService;
            _jwtSettings = jwtSettings.Value;
        }

        // Register a new user
        public async Task SaveAsync(RegisterUserDto registerUserDto)
        {
            var existingUser = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == registerUserDto.Email);

            if (existingUser != null)
                throw new InvalidOperationException("User already exists!");

            var user = new User
            {
                Username = registerUserDto.Username,
                Email = registerUserDto.Email,
                Password = HashPassword(registerUserDto.Password),
                CreatedAt = DateTime.UtcNow,
                Enabled = false,
                VerificationToken = GenerateVerificationToken(),
                TokenExpiryDate = DateTime.UtcNow.AddHours(24)
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            var userRole = new UserRole
            {
                UserId = user.UserId,
                RoleId = 3,
                CreatedAt = DateTime.UtcNow
            };

            _context.UserRoles.Add(userRole);
            await _context.SaveChangesAsync();

            await SendVerificationEmailAsync(user);
        }

        // Send account verification email
        private async Task SendVerificationEmailAsync(User user)
        {
            var verificationLink = $"https://localhost:3000/user-verification/{user.VerificationToken}";
            var subject = "Account Verification from Waves Dvds";
            var body = $@"
            <div style='font-family: Arial, sans-serif; background-color: #f6f9fc; padding: 20px;'>
                <div style='max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px;'>
                    <div style='text-align: center;'>
                        <img src='https://res.cloudinary.com/dklnlcse3/image/upload/v1730739115/website_name_l3j1ew.png' alt='Waves Dvds' style='width: 120px; margin-bottom: 20px'/>
                    </div>
                    <h2 style='color: #32325d;'>Verify Your Email</h2>
                    <p style='color: #525f7f;'>Thanks for creating an account with Waves Dvds. Please verify your email so you can get up and running quickly.</p>
                    <div style='text-align: center; margin: 20px 0;'>
                        <a href='{verificationLink}' style='background-color: #F64F4F; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;'>Verify Account</a>
                    </div>
                    <p style='color: #525f7f;'>Once your email is verified, you can start setting up your account. If you have any questions, please <a href='https://yourwebsite.com/support' style='color: #F64F4F; text-decoration: none;'>visit our support site</a>.</p>
                    <hr style='border: none; border-top: 1px solid #e6ebf1; margin: 20px 0;' />
                    <p style='font-size: 12px; color: #aab7c4; text-align: center;'>Waves Dvds, 1234 Your Address St, Your City, ST 12345</p>
                </div>
            </div>";

            await _emailService.SendMailAsync(user.Email, subject, body);
        }

        // Verify the user's account
        public async Task VerifyAccountAsync(string verificationToken)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.VerificationToken == verificationToken && u.TokenExpiryDate > DateTime.UtcNow);

            if (user == null) throw new Exception("Invalid or expired verification token.");

            user.Enabled = true;
            user.VerificationToken = null;
            user.TokenExpiryDate = null;
            await _context.SaveChangesAsync();

            _logger.LogInformation("User with email {Email} successfully verified.", user.Email);
        }

        // Request password reset
        public async Task RequestPasswordResetAsync(string email)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == email)
                ?? throw new Exception("User not found.");

            user.VerificationToken = GenerateVerificationToken();
            user.TokenExpiryDate = DateTime.UtcNow.AddHours(1);
            await _context.SaveChangesAsync();

            var resetLink = $"https://localhost:3000/reset-password/{user.VerificationToken}";
            var subject = "Password Reset Request";
            var body = $@"
            <div style='font-family: Arial, sans-serif; background-color: #f6f9fc; padding: 20px;'>
                <div style='max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 8px;'>
                    <div style='text-align: center;'>
                        <img src='https://res.cloudinary.com/dklnlcse3/image/upload/v1730739115/website_name_l3j1ew.png' alt='Waves Dvds' style='width: 120px; margin-bottom: 20px'/>
                    </div>
                    <h2 style='color: #32325d;'>Reset Your Password</h2>
                    <p style='color: #525f7f;'>We received a request to reset your password. Click the button below to reset it. If you did not request this, you can safely ignore this email.</p>
                    <div style='text-align: center; margin: 20px 0;'>
                        <a href='{resetLink}' style='background-color: #F64F4F; color: #ffffff; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;'>Reset Password</a>
                    </div>
                    <p style='color: #525f7f;'>This link will expire in 1 hour.</p>
                    <hr style='border: none; border-top: 1px solid #e6ebf1; margin: 20px 0;' />
                    <p style='font-size: 12px; color: #aab7c4; text-align: center;'>Waves Dvds, 1234 Your Address St, Your City, ST 12345</p>
                </div>
            </div>";

            await _emailService.SendMailAsync(user.Email, subject, body);
        }

        // Reset password
        public async Task ResetPasswordAsync(string verificationToken, string newPassword, string confirmPassword)
        {
            if (newPassword != confirmPassword)
                throw new Exception("Passwords do not match.");

            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.VerificationToken == verificationToken && u.TokenExpiryDate > DateTime.UtcNow)
                ?? throw new Exception("Invalid or expired token.");

            user.Password = HashPassword(newPassword);
            user.VerificationToken = null;
            user.TokenExpiryDate = null;
            await _context.SaveChangesAsync();
        }

        // Login the user
        public async Task<string> LoginAsync(LoginDto loginDto)
        {
            if (loginDto == null)
            {
                _logger.LogError("LoginDto is null.");
                throw new ArgumentNullException(nameof(loginDto));
            }

            if (string.IsNullOrWhiteSpace(loginDto.Email))
            {
                _logger.LogError("Email is null or empty.");
                throw new ArgumentException("Email cannot be null or empty.", nameof(loginDto.Email));
            }

            if (string.IsNullOrWhiteSpace(loginDto.Password))
            {
                _logger.LogError("Password is null or empty.");
                throw new ArgumentException("Password cannot be null or empty.", nameof(loginDto.Password));
            }

            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == loginDto.Email)
                ?? throw new Exception("User not found.");

            if (!VerifyPassword(loginDto.Password, user.Password))
            {
                _logger.LogWarning("Invalid password attempt for email {Email}.", loginDto.Email);
                throw new Exception("Invalid password.");
            }

            if (!user.Enabled.GetValueOrDefault())
            {
                _logger.LogWarning("Account is not verified for email {Email}.", loginDto.Email);
                throw new Exception("Account is not verified.");
            }

            var token = GenerateJwtToken(user);
            _logger.LogInformation("User {Email} logged in successfully.", user.Email);
            return token;
        }

        public async Task ResendVerificationEmailAsync(string email)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == email)
                ?? throw new Exception("User not found.");

            // Regenerate the verification token
            user.VerificationToken = GenerateVerificationToken();
            user.TokenExpiryDate = DateTime.UtcNow.AddHours(24);

            // Save the changes
            await _context.SaveChangesAsync();

 
            await SendVerificationEmailAsync(user);
        }

        private string GenerateJwtToken(User user)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Email),
                new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString())
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.SecretKey));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                _jwtSettings.Issuer,
                _jwtSettings.Audience,
                claims,
                expires: DateTime.UtcNow.AddMinutes(30),
                signingCredentials: creds);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }

        private bool VerifyPassword(string password, string hashedPassword)
        {
            return BCrypt.Net.BCrypt.Verify(password, hashedPassword);
        }

        private string GenerateVerificationToken()
        {
            const string validChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var random = new Random();
            var tokenLength = 64;

            var token = new StringBuilder(tokenLength);

            for (int i = 0; i < tokenLength; i++)
            {
                token.Append(validChars[random.Next(validChars.Length)]);
            }

            return token.ToString();
        }


    }
}
