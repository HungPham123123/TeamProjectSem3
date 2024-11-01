using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using System.Net;
using System.Security.Cryptography;
using System.Text;

namespace ProjectSem3.Service
{
    public class UserService : IUserService
    {
        private readonly ILogger<UserService> _logger;
        private readonly OnlineDvdsContext _context; // Assume this is your DbContext
        private readonly EmailService _emailService;

        public UserService(
            ILogger<UserService> logger,
            OnlineDvdsContext context,
            EmailService emailService)
        {
            _logger = logger;
            _context = context;
            _emailService = emailService;
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
                Password = HashPassword(registerUserDto.Password), // Hash the password manually
                CreatedAt = DateTime.UtcNow,
                Enabled = false
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            await SendVerificationEmailAsync(user);
        }

        private async Task SendVerificationEmailAsync(User user)
        {
            var encodedEmail = EncodeEmail(user.Email); // Encode the email
            var verificationLink = $"https://yourwebsite.com/{encodedEmail}";
            var subject = "Account Verification from Waves Dvds";
            var body = $"Please verify your account by clicking this link: <a href='{verificationLink}'>Verify Account</a>";
            await _emailService.SendMailAsync(user.Email, subject, body);
        }

        // Verify the user's account
        public async Task VerifyAccountAsync(string encodedEmail)
        {
            var email = DecodeEmail(encodedEmail); // Decode the email
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == email);

            if (user == null) throw new Exception("Invalid verification link.");

            user.Enabled = true;
            await _context.SaveChangesAsync();

            _logger.LogInformation("User with email {Email} successfully verified.", user.Email);
        }

        // Login the user
        public async Task<UserDto> LoginAsync(LoginDto loginDto)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == loginDto.Email)
                       ?? throw new Exception("User not found.");

            if (!VerifyPassword(loginDto.Password, user.Password))
                throw new Exception("Invalid password.");

            // Check if the account is enabled
            if (!user.Enabled.GetValueOrDefault())
                throw new Exception("Account is not verified.");

            return new UserDto
            {
                UserId = user.UserId,
                Email = user.Email,
                Username = user.Username
            };
        }

        // Reset password
        public async Task ResetPasswordAsync(string email, string newPassword)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Email == email) ?? throw new Exception("User not found.");

            user.Password = HashPassword(newPassword);
            await _context.SaveChangesAsync();
        }

        // Hash password using HMACSHA256
        private string HashPassword(string password)
        {
            using var hmac = new HMACSHA256();
            var hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            return Convert.ToBase64String(hash);
        }

        // Verify password
        private bool VerifyPassword(string password, string storedHash)
        {
            var hash = Convert.FromBase64String(storedHash);
            using var hmac = new HMACSHA256();
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            return computedHash.SequenceEqual(hash);
        }

        // Encode email to Base64
        private string EncodeEmail(string email)
        {
            var plainTextBytes = Encoding.UTF8.GetBytes(email);
            return Convert.ToBase64String(plainTextBytes);
        }

        // Decode email from Base64
        private string DecodeEmail(string encodedEmail)
        {
            var base64EncodedBytes = Convert.FromBase64String(encodedEmail);
            return Encoding.UTF8.GetString(base64EncodedBytes);
        }
    }
}
