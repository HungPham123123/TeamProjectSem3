using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service;
using System.Threading.Tasks;

namespace ProjectSem3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthController(IUserService userService)
        {
            _userService = userService;
        }

        // Register a new user
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterUserDto registerUserDto)
        {
            try
            {
                await _userService.SaveAsync(registerUserDto);
                return Ok(new { message = "Registration successful! Please check your email for verification." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // Login a user
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            try
            {
                var userDto = await _userService.LoginAsync(loginDto);
                return Ok(userDto);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // Verify user account
        [HttpGet("verify")]
        public async Task<IActionResult> VerifyAccount(string email)
        {
            try
            {
                await _userService.VerifyAccountAsync(email);
                return Ok(new { message = "Account successfully verified!" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // Reset password
        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDto resetPasswordDto)
        {
            try
            {
                await _userService.ResetPasswordAsync(resetPasswordDto.Email, resetPasswordDto.NewPassword);
                return Ok(new { message = "Password reset successfully!" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
