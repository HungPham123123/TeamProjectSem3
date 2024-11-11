using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service;
using System.Threading.Tasks;
using System.Collections.Generic;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        // Lấy tất cả đơn hàng
        [HttpGet]
        public async Task<IActionResult> GetAllOrders()
        {
            var orders = await _orderService.GetAllOrdersAsync();
            return Ok(orders);
        }

        // Lấy chi tiết một đơn hàng theo ID
        [HttpGet("{orderId}")]
        public async Task<IActionResult> GetOrderById(int orderId)
        {
            var orderResponse = await _orderService.GetOrderByIdAsync(orderId);
            if (orderResponse == null)
            {
                return NotFound();
            }

            return Ok(orderResponse);
        }

        // Cập nhật đơn hàng
        [HttpPut("{orderId}")]
        public async Task<IActionResult> UpdateOrder(int orderId, [FromBody] OrderUpdateDTO orderUpdateDTO)
        {
            var updated = await _orderService.UpdateOrderAsync(orderId, orderUpdateDTO);
            if (!updated)
            {
                return NotFound();
            }

            return NoContent();
        }

        // Xóa đơn hàng
        [HttpDelete("{orderId}")]
        public async Task<IActionResult> DeleteOrder(int orderId)
        {
            var deleted = await _orderService.DeleteOrderAsync(orderId);
            if (!deleted)
            {
                return NotFound();
            }

            return NoContent();
        }

        // Tìm kiếm đơn hàng (sử dụng phương thức SearchOrdersAsync đã có)
        [HttpGet("search")]
        public async Task<IActionResult> SearchOrders([FromQuery] string keyword)
        {
            var searchResults = await _orderService.SearchOrdersAsync(keyword);
            return Ok(searchResults);
        }
    }
}
