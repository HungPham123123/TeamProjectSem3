using ProjectSem3.DTOs;

namespace ProjectSem3.Service.Interfaces
{
    public interface IUserManageService
    {
        Task<List<UserManageDTO>> GetAllUsersAsync();
        Task<UserManageDTO?> GetUserByIdAsync(int userId);
        Task AddUserAsync(UserManageDTO userDto);
        Task UpdateUserAsync(int userId, UpdateUserDTO userDto);
        Task DeleteUserAsync(int userId);
        Task<List<UserManageDTO>> SearchUsersAsync(string keyword);
        Task RecoverUserAsync(int userId);
    }
}
