using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
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
        public async Task<IActionResult> UpdateUser(int id, [FromBody] UserManageDTO userDto)
        {
            if (id != userDto.UserId)
            {
                return BadRequest("User ID mismatch");
            }

            try
            {
                await _userManageService.UpdateUserAsync(userDto);
            }
            catch (KeyNotFoundException)
            {
                return NotFound("User not found");
            }

            return Ok(userDto);
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
