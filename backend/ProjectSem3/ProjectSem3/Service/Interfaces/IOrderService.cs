using ProjectSem3.DTOs;

namespace ProjectSem3.Service.Interfaces
{
    public interface IOrderService
    {
        Task<List<OrderResponseDTO>> GetAllOrdersAsync();
        Task<OrderResponseDTO?> GetOrderByIdAsync(int orderId);
        Task<bool> UpdateOrderAsync(int orderId, OrderUpdateDTO orderUpdateDTO);
        Task<bool> DeleteOrderAsync(int orderId);
        Task<List<OrderResponseDTO>> SearchOrdersAsync(string keyword);
        Task<OrderDto?> UserOrderByIds(int orderId);
        Task<List<OrderDto>> GetAllOrdersForUser(int userId);
    }
}
