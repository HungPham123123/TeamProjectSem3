using ProjectSem3.DTOs;

namespace ProjectSem3.Service.Interfaces
{
    public interface IOrderService
    {
        Task<List<OrderManageDTO>> GetAllOrdersAsync();
        Task<OrderManageDTO?> GetOrderByIdAsync(int orderId);
        Task AddOrderAsync(OrderManageDTO orderDto);
        Task UpdateOrderAsync(OrderManageDTO orderDto);
        Task DeleteOrderAsync(int orderId);
        Task<List<OrderManageDTO>> SearchOrdersAsync(string keyword);
        Task<OrderDto?> UserOrderByIds(int orderId);
        Task<List<OrderDto>> GetAllOrdersForUser(int userId);
    }
}
