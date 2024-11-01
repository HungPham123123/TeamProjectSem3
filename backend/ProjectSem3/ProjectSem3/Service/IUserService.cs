using ProjectSem3.DTOs;
using ProjectSem3.Models;

namespace ProjectSem3.Service
{
    public interface IUserService
    {
        Task SaveAsync(RegisterUserDto registerUserDto);
        Task VerifyAccountAsync(string email);

        Task<UserDto> LoginAsync(LoginDto loginDto);
        Task ResetPasswordAsync(string email, string newPassword);

    }
}
