/*using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Service
{
    public class OrderService : IOrderService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public OrderService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<OrderDto?> UserOrderByIds(int orderId)
        {
            var order = await _context.Orders
                .Include(o => o.User)  // Make sure User is included in the query
                .Where(o => o.OrderId == orderId)
                .Select(o => new OrderDto
                {
                    OrderId = o.OrderId,
                    UserId = o.UserId ?? 0, // Handle nullable UserId
                    FirstName = o.FirstName ?? string.Empty,
                    LastName = o.LastName ?? string.Empty,
                    Country = o.Country ?? string.Empty,
                    City = o.City ?? string.Empty,
                    Address = o.Address ?? string.Empty,
                    Optional = o.Optional ?? string.Empty,
                    ZipCode = o.ZipCode ?? string.Empty,
                    Email = o.User.Email ?? string.Empty,
                    PhoneNumber = o.PhoneNumber ?? string.Empty,
                    Tax = o.Tax ?? 0.0,  // Handle nullable Tax
                    TotalAmount = o.TotalAmount ?? 0m, // Handle nullable TotalAmount
                    CreatedAt = o.CreatedAt ?? DateTime.MinValue,
                    UpdatedAt = o.UpdatedAt ?? DateTime.MinValue,
                    Status = o.Status ?? string.Empty,
                    OrderItems = o.OrderItems.Select(oi => new OrderItemDto
                    {
                        ProductId = oi.ProductId ?? 0, // Handle nullable ProductId
                        ProductTitle = oi.Product.Title ?? string.Empty, // Handle null Product Title
                        Quantity = oi.Quantity ?? 0, // Handle nullable Quantity
                        Price = oi.Price ?? 0m, // Handle nullable Price
                        ProductImage = oi.Product.Image1 ?? string.Empty // Handle null Image
                    }).ToList()
                })
                .FirstOrDefaultAsync();

            return order;
        }

        public async Task<List<OrderDto>> GetAllOrdersForUser(int userId)
        {
            var orders = await _context.Orders
                .Where(o => o.UserId == userId)
                .Select(o => new OrderDto
                {
                    OrderId = o.OrderId,
                    UserId = o.UserId ?? 0, // Handle nullable UserId
                    FirstName = o.FirstName ?? string.Empty,
                    LastName = o.LastName ?? string.Empty,
                    Country = o.Country ?? string.Empty,
                    City = o.City ?? string.Empty,
                    Address = o.Address ?? string.Empty,
                    Optional = o.Optional ?? string.Empty,
                    ZipCode = o.ZipCode ?? string.Empty,
                    Email = o.User.Email ?? string.Empty,
                    PhoneNumber = o.PhoneNumber ?? string.Empty,
                    Tax = o.Tax ?? 0.0,  // Handle nullable Tax
                    TotalAmount = o.TotalAmount ?? 0m, // Handle nullable TotalAmount
                    CreatedAt = o.CreatedAt ?? DateTime.MinValue,
                    UpdatedAt = o.UpdatedAt ?? DateTime.MinValue,
                    Status = o.Status ?? string.Empty,
                    OrderItems = o.OrderItems.Select(oi => new OrderItemDto
                    {
                        ProductId = oi.ProductId ?? 0, // Handle nullable ProductId
                        ProductTitle = oi.Product.Title ?? string.Empty, // Handle null Product Title
                        Quantity = oi.Quantity ?? 0, // Handle nullable Quantity
                        Price = oi.Price ?? 0m, // Handle nullable Price
                        ProductImage = oi.Product.Image1 ?? string.Empty // Handle null Image
                    }).ToList()
                })
                .ToListAsync(); // Changed from FirstOrDefaultAsync to ToListAsync to return a list of orders

            return orders;
        }

        public async Task<List<OrderResponseDTO>> GetAllOrdersAsync()
        {
            var orders = await _context.Orders.Include(o => o.User).Include(o => o.Payment).ToListAsync();
            return _mapper.Map<List<OrderManageDTO>>(orders);
        }


        public async Task<OrderResponseDTO> GetOrderByIdAsync(int orderId)
        {
            var order = await _context.Orders
                .Include(o => o.User)
                .Include(o => o.Payment)
                .FirstOrDefaultAsync(o => o.OrderId == orderId);

            return order == null ? null : _mapper.Map<OrderResponseDTO>(order);
        }

        public async Task<bool> UpdateOrderAsync(int orderId, OrderUpdateDTO orderUpdateDTO)
        {
            var order = await _context.Orders.FirstOrDefaultAsync(o => o.OrderId == orderId);
            if (order == null) return false;

            _mapper.Map(orderUpdateDTO, order);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteOrderAsync(int orderId)
        {
            var order = await _context.Orders.FirstOrDefaultAsync(o => o.OrderId == orderId);
            if (order == null) return false;

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<List<OrderResponseDTO>> SearchOrdersAsync(string keyword)
        {
            var orders = await _context.Orders
                .Where(o => o.PhoneNumber.Contains(keyword) || o.OrderId.ToString() == keyword)
                .Include(o => o.User)
                .ToListAsync();

            return _mapper.Map<List<OrderResponseDTO>>(orders);
        }
    }
}
*/