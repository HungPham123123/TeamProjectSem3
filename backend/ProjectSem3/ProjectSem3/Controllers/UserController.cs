using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class UserController : ControllerBase
    {
        private readonly IUserManageService _userManageService;

        public UserController(IUserManageService userManageService)
        {
            _userManageService = userManageService;
        }

        // Lấy tất cả người dùng
        [HttpGet]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userManageService.GetAllUsersAsync();
            return Ok(users);
        }

        // Lấy người dùng theo ID
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserById(int id)
        {
            var user = await _userManageService.GetUserByIdAsync(id);
            if (user == null)
            {
                return NotFound("User not found");
            }
            return Ok(user);
        }

        // Thêm người dùng mới
        [HttpPost]
        public async Task<IActionResult> AddUser([FromBody] UserManageDTO userDto)
        {
            if (userDto == null)
            {
                return BadRequest("Invalid user data");
            }

            await _userManageService.AddUserAsync(userDto);
            return CreatedAtAction(nameof(GetUserById), new { id = userDto.UserId }, userDto);
        }

        // Cập nhật người dùng
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, UpdateUserDTO userDto)
        {
            try
            {
                await _userManageService.UpdateUserAsync(id, userDto);
                return Ok(new { Message = "User updated successfully" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }


        // Xóa người dùng (disable)
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            try
            {
                await _userManageService.DeleteUserAsync(id);
            }
            catch (KeyNotFoundException)
            {
                return NotFound("User not found");
            }

            return Ok("Deleted");
        }
/*
        [HttpDelete("{userId}")]*/
       /* public async Task<IActionResult> DeleteSuper(int userId)
        {
            var isDeleted = await _userManageService.DeleteUser(userId);

            if (!isDeleted)
            {
                return NotFound(new { message = "User not found or error during deletion" });
            }

            // Return a success response
            return Ok(new { message = "User and related data deleted successfully" });
        }*/

        // Tìm kiếm người dùng
        [HttpGet("search")]
        public async Task<IActionResult> SearchUsers([FromQuery] string keyword)
        {
            var users = await _userManageService.SearchUsersAsync(keyword);
            return Ok(users);
        }

        // Khôi phục người dùng
        [HttpPost("recover/{id}")]
        public async Task<IActionResult> RecoverUser(int id)
        {
            try
            {
                await _userManageService.RecoverUserAsync(id);
            }
            catch (KeyNotFoundException)
            {
                return NotFound("User not found");
            }

            return Ok("User successfully recovered");
        }
    }
}
