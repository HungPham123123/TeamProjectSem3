using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;
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

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto loginDto)
        {
            try
            {
                var token = await _userService.LoginAsync(loginDto);
                return Ok(new { Token = token });
            }
            catch (Exception ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpGet("verify")]
        public async Task<IActionResult> VerifyAccount(string verificationToken)
        {
            try
            {
                await _userService.VerifyAccountAsync(verificationToken);
                return Ok(new { message = "Your email has been verified." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("request-reset-password")]
        public async Task<IActionResult> RequestPasswordReset([FromBody] ResetPasswordRequestDto resetPasswordRequestDto)
        {
            try
            {
                await _userService.RequestPasswordResetAsync(resetPasswordRequestDto.Email);
                return Ok(new { message = "Password reset link sent to your email." });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("reset-password")]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordDto resetPasswordDto)
        {
            try
            {
                await _userService.ResetPasswordAsync(resetPasswordDto.VerificationToken, resetPasswordDto.NewPassword, resetPasswordDto.ConfirmPassword);
                return Ok(new { message = "Password reset successfully!" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("resend-verification")]
        public async Task<IActionResult> ResendVerification([FromBody] ResendVerificationDto resendVerificationDto)
        {
            if (string.IsNullOrEmpty(resendVerificationDto.Email))
            {
                return BadRequest("Email cannot be empty.");
            }

            try
            {
                await _userService.ResendVerificationEmailAsync(resendVerificationDto.Email);
                return Ok("Verification email resent.");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Get user information by ID (based on the logged-in user's token)
        [HttpGet("info")]
        public async Task<IActionResult> GetUserInfo()
        {
            try
            {
                var userId = GetCurrentUserId(); // Method to extract user ID from JWT
                var userInfo = await _userService.GetUserInfoAsync(userId);
                if (userInfo == null)
                {
                    return NotFound("User not found");
                }
                return Ok(userInfo);
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // Update user information (based on the logged-in user's token)
        [HttpPut("info")]
        public async Task<IActionResult> UpdateUserInfo([FromBody] UserDto updateUserDto)
        {
            try
            {
                var userId = GetCurrentUserId(); // Method to extract user ID from JWT
                await _userService.UpdateUserInfoAsync(userId, updateUserDto);
                return Ok(new { message = "User information updated successfully" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        // Helper method to extract the current user's ID from the token (or session)
        private int GetCurrentUserId()
        {
            // Assuming that the user ID is stored in the token (JWT or session)
            // You can implement this according to how you store user information.
            var userIdClaim = User.FindFirst("UserId")?.Value;
            if (userIdClaim == null)
            {
                throw new Exception("User not authenticated");
            }
            return int.Parse(userIdClaim);
        }
    }
}
