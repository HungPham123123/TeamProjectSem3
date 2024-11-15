using ProjectSem3.DTOs;

namespace ProjectSem3.Service.Interfaces
{
    public interface IOrderService
    {
        Task<List<OrderResponseDTO>> GetAllOrdersAsync();
        Task<OrderResponseDTO?> GetOrderByIdAsync(int orderId);
        Task AddOrderAsync(OrderResponseDTO orderDto);
        Task UpdateOrderAsync(OrderUpdateDTO orderDto);
        Task DeleteOrderAsync(int orderId);
        Task<List<OrderResponseDTO>> SearchOrdersAsync(string keyword);
        Task<OrderDto?> UserOrderByIds(int orderId);
        Task<List<OrderDto>> GetAllOrdersForUser(int userId);
    }
}
