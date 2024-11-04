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
                return Ok(new { message = "Account successfully verified!" });
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

    }
}
