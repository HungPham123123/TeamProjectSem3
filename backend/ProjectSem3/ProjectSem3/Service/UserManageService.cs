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

        public async Task UpdateUserAsync(UserManageDTO userDto)
        {
            var user = await _context.Users.FindAsync(userDto.UserId);
            if (user == null) throw new KeyNotFoundException("User not found");

            _mapper.Map(userDto, user);
            user.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteUserAsync(int userId)
        {
            var user = await _context.Users.FindAsync(userId);
            if (user == null) throw new KeyNotFoundException("User not found");

            user.Enabled = false;
            _context.Users.Update(user);
            await _context.SaveChangesAsync();
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
