/*using ProjectSem3.DTOs;

namespace ProjectSem3.Service.Interfaces
{
    public interface IOrderService
    {
        Task<List<OrderResponseDTO>> GetAllOrdersAsync();
        Task<OrderResponseDTO?> GetOrderByIdAsync(int orderId); // Updated to match the service return type // Add this method in `OrderService`
        Task<bool> UpdateOrderAsync(int orderId, OrderUpdateDTO orderDto); // Updated parameters and return type
        Task<bool> DeleteOrderAsync(int orderId); // Updated return type
        Task<List<OrderResponseDTO>> SearchOrdersAsync(string keyword); // Updated return type to match `OrderService`
        Task<OrderDto?> UserOrderByIds(int orderId);
        Task<List<OrderDto>> GetAllOrdersForUser(int userId);
    }
}
*/