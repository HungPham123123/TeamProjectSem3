using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization; // Add this for authorization
using ProjectSem3.Service;
using ProjectSem3.DTOs; // Adjust the namespace based on your actual DTO location
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserOrderController : ControllerBase
    {
        private readonly UserOrderService _userOrderService;

        // Constructor injection of the service
        public UserOrderController(UserOrderService userOrderService)
        {
            _userOrderService = userOrderService;
        }

        [HttpGet("user/orders")]
        [Authorize]
        public async Task<IActionResult> GetAllUserOrders()
        {
            var userId = GetUserId(); // Custom method to fetch the user ID from the JWT token

            if (userId == null)
                return Unauthorized("User not authorized.");

            // You can use your service to fetch orders for this userId
            var orders = await _userOrderService.GetAllOrdersForUser(userId.Value);

            if (orders == null || !orders.Any())
                return NotFound("No orders found for the user.");

            return Ok(orders);
        }

        [HttpGet("user/orders/{orderId}")]
        [Authorize]
        public async Task<IActionResult> GetOrderById(int orderId)
        {
            try
            {
                var order = await _userOrderService.GetOrderById(orderId);
                return Ok(order); // Return the order details if found
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message); // Handle if the order was not found
            }
            catch (UnauthorizedAccessException ex)
            {
                return Unauthorized(ex.Message); // Handle if user is not authorized
            }
        }


        private int? GetUserId()
        {
            // Extract the UserId from the JWT claims
            var userIdClaim = User.Claims.FirstOrDefault(c => c.Type == "UserId")?.Value;
            if (string.IsNullOrEmpty(userIdClaim))
            {
                return null; // Return null if the claim is not found
            }

            if (int.TryParse(userIdClaim, out var userId))
            {
                return userId;
            }

            return null; // Return null if parsing fails
        }
    }
}
