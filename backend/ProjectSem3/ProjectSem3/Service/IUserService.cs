using ProjectSem3.DTOs;
using ProjectSem3.Models;

namespace ProjectSem3.Service
{
    public interface IUserService
    {
        Task SaveAsync(RegisterUserDto registerUserDto);
        Task VerifyAccountAsync(string verificationToken);
        Task<string> LoginAsync(LoginDto loginDto);
        Task RequestPasswordResetAsync(string email);
        Task ResetPasswordAsync(string verificationToken, string newPassword, string confirmPassword);
        Task ResendVerificationEmailAsync(string email);
    }
}
