using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service.Interfaces;

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
    }
}
