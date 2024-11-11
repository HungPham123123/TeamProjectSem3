using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Service
{
    public class UserManageService : IUserManageService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public UserManageService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<UserManageDTO>> GetAllUsersAsync()
        {
            var users = await _context.Users.Include(u => u.UserRoles).ThenInclude(ur => ur.Role).ToListAsync();
            return _mapper.Map<List<UserManageDTO>>(users);
        }

        public async Task<UserManageDTO?> GetUserByIdAsync(int userId)
        {
            var user = await _context.Users.Include(u => u.UserRoles).ThenInclude(ur => ur.Role)
                            .FirstOrDefaultAsync(u => u.UserId == userId);
            return _mapper.Map<UserManageDTO>(user);
        }

        public async Task AddUserAsync(UserManageDTO userDto)
        {
            var user = _mapper.Map<User>(userDto);
            user.CreatedAt = DateTime.UtcNow;
            user.UpdatedAt = DateTime.UtcNow;
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateUserAsync(int userId, UpdateUserDTO userDto)
        {
            var user = await _context.Users
                                      .Include(u => u.UserRoles)
                                      .ThenInclude(ur => ur.Role)
                                      .FirstOrDefaultAsync(u => u.UserId == userId);

            if (user == null)
            {
                throw new KeyNotFoundException("User not found");
            }

            // Kiểm tra xem vai trò có hợp lệ hay không
            if (userDto.Role != "Admin" && userDto.Role != "Moderator" && userDto.Role != "User")
            {
                throw new ArgumentException("Invalid role. Must be one of: Admin, Moderator, or User.");
            }

            // Ánh xạ các thuộc tính từ UpdateUserDTO sang User (ngoại trừ Username)
            _mapper.Map(userDto, user);

            // Xóa vai trò hiện tại của người dùng, nếu có
            var existingRole = user.UserRoles.FirstOrDefault();
            if (existingRole != null)
            {
                _context.UserRoles.Remove(existingRole);
            }

            // Tìm vai trò mới trong DB và gán cho người dùng
            var role = await _context.Roles.FirstOrDefaultAsync(r => r.RoleName == userDto.Role);
            if (role == null)
            {
                throw new KeyNotFoundException("Role not found");
            }

            user.UserRoles.Add(new UserRole
            {
                UserId = user.UserId,
                RoleId = role.RoleId,
                CreatedAt = DateTime.UtcNow
            });

            await _context.SaveChangesAsync();
        }


        public async Task DeleteUserAsync(int userId)
        {
            // Tìm người dùng trong cơ sở dữ liệu
            var user = await _context.Users.FindAsync(userId);
            if (user == null)
            {
                throw new KeyNotFoundException("User not found");
            }

            // Xóa các quyền của người dùng trong bảng UserRoles
            var userRoles = await _context.UserRoles.Where(ur => ur.UserId == userId).ToListAsync();
            if (userRoles.Any())
            {
                _context.UserRoles.RemoveRange(userRoles);  // Xóa quyền
                await _context.SaveChangesAsync();  // Lưu thay đổi
            }

            // Đánh dấu người dùng là không hoạt động (disable tài khoản)
            user.Enabled = false;
            _context.Users.Update(user);  // Cập nhật thông tin người dùng
            await _context.SaveChangesAsync();  // Lưu thay đổi
        }


        public async Task<List<UserManageDTO>> SearchUsersAsync(string keyword)
        {
            var users = await _context.Users
                .Where(u => u.Username.Contains(keyword) || u.Email.Contains(keyword) || u.UserId.ToString() == keyword)
                .Include(u => u.UserRoles).ThenInclude(ur => ur.Role)
                .ToListAsync();

            return _mapper.Map<List<UserManageDTO>>(users);
        }

        public async Task RecoverUserAsync(int userId)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user == null) throw new KeyNotFoundException("User not found");

            user.Enabled = true;
            user.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();
        }
    }
}
