using BCrypt.Net; // Add this import for BCrypt
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using ProjectSem3.Configurations; // Add this namespace for JwtSettings
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
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
        private readonly OnlineDvdsContext _context; // Assume this is your DbContext
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


        private async Task SendVerificationEmailAsync(User user)
        {
            var verificationLink = $"https://yourwebsite.com/verify/{user.VerificationToken}";
            var subject = "Account Verification from Waves Dvds";
            var body = $"Please verify your account by clicking this link: <a href='{verificationLink}'>Verify Account</a>";
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

        public async Task RequestPasswordResetAsync(string email)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == email)
                ?? throw new Exception("User not found.");

            user.VerificationToken = GenerateVerificationToken();
            user.TokenExpiryDate = DateTime.UtcNow.AddHours(1); // Token valid for 1 hour
            await _context.SaveChangesAsync();

            var resetLink = $"https://yourwebsite.com/reset-password/{user.VerificationToken}";
            var subject = "Password Reset Request";
            var body = $"Click the link to reset your password: <a href='{resetLink}'>Reset Password</a>";
            await _emailService.SendMailAsync(user.Email, subject, body);
        }

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

            if (user.Password == null)
            {
                _logger.LogError("User password is null for email {Email}.", loginDto.Email);
                throw new Exception("User password is null.");
            }

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

            if (string.IsNullOrWhiteSpace(token))
            {
                _logger.LogError("Generated token is null or empty for user {Email}.", user.Email);
                throw new Exception("Failed to generate token.");
            }

            return token;
        }



        private string GenerateVerificationToken()
        {
            using var rng = RandomNumberGenerator.Create();
            var tokenData = new byte[32];
            rng.GetBytes(tokenData);
            return Convert.ToBase64String(tokenData);
        }

        private string HashPassword(string password)
        {
            return BCrypt.Net.BCrypt.HashPassword(password);
        }

        private bool VerifyPassword(string password, string storedHash)
        {
            return BCrypt.Net.BCrypt.Verify(password, storedHash);
        }

        private string GenerateJwtToken(User user)
        {
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtSettings.SecretKey)); // Use the injected JwtSettings
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
        new Claim(JwtRegisteredClaimNames.Sub, user.Email),
        new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
        new Claim("UserId", user.UserId.ToString()),
        new Claim("Username", user.Username)
    };

            var token = new JwtSecurityToken(
                issuer: _jwtSettings.Issuer,
                audience: _jwtSettings.Audience,
                claims: claims,
                expires: DateTime.UtcNow.AddMinutes(30),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
