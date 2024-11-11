using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service.Interfaces;
using System.Security.Claims;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        // Lấy danh sách tất cả đơn hàng
        [HttpGet]
        public async Task<IActionResult> GetAllOrders()
        {
            var orders = await _orderService.GetAllOrdersAsync();
            return Ok(orders);
        }

        // Lấy đơn hàng theo ID
        [HttpGet("{orderId}")]
        public async Task<IActionResult> GetOrderById(int orderId)
        {
            var order = await _orderService.GetOrderByIdAsync(orderId);
            if (order == null) return NotFound("Order không tìm thấy.");

            return Ok(order);
        }

        // Thêm mới đơn hàng
        [HttpPost]
        public async Task<IActionResult> AddOrder([FromBody] OrderManageDTO orderDto)
        {
            await _orderService.AddOrderAsync(orderDto);
            return CreatedAtAction(nameof(GetOrderById), new { orderId = orderDto.OrderId }, orderDto);
        }

        // Cập nhật đơn hàng
        [HttpPut("{orderId}")]
        public async Task<IActionResult> UpdateOrder(int orderId, [FromBody] OrderManageDTO orderDto)
        {
            if (orderId != orderDto.OrderId) return BadRequest("ID đơn hàng không khớp.");
            await _orderService.UpdateOrderAsync(orderDto);
            return NoContent();
        }

        // Xóa đơn hàng
        [HttpDelete("{orderId}")]
        public async Task<IActionResult> DeleteOrder(int orderId)
        {
            await _orderService.DeleteOrderAsync(orderId);
            return NoContent();
        }

        // Tìm kiếm đơn hàng
        [HttpGet("search")]
        public async Task<IActionResult> SearchOrders([FromQuery] string keyword)
        {
            var orders = await _orderService.SearchOrdersAsync(keyword);
            return Ok(orders);
        }

        // Get all orders for the authenticated user
        [HttpGet("user/orders")]
        public async Task<IActionResult> GetAllUserOrders()
        {
            var userId = GetUserId();  // Method to fetch the user ID
            if (userId == null) return Unauthorized("User not authorized.");

            var orders = await _orderService.GetAllOrdersForUser(userId.Value);

            if (orders == null || !orders.Any())
                return NotFound("No orders found for the user.");

            return Ok(orders);
        }

        // Get a specific order by its ID for the authenticated user
        [HttpGet("user/order/{orderId}")]
        public async Task<IActionResult> GetUserOrderById(int orderId)
        {
            var userId = GetUserId();  // Method to fetch the user ID
            if (userId == null) return Unauthorized("User not authorized.");

            var order = await _orderService.UserOrderByIds(orderId);

            if (order == null)
                return NotFound("Order not found for the user.");

            return Ok(order);
        }


        private int? GetUserId()
        {
            // Extract the UserId from the JWT token.
            if (User.Identity is ClaimsIdentity identity)
            {
                var userIdClaim = identity.FindFirst("UserId");

                // If the UserId claim is found, return it as an integer, otherwise return null.
                if (userIdClaim != null && int.TryParse(userIdClaim.Value, out int userId))
                {
                    return userId;
                }
            }
            return null;
        }
    }
}
