using AutoMapper;
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

        public async Task<List<OrderManageDTO>> GetAllOrdersAsync()
        {
            var orders = await _context.Orders.Include(o => o.User).ToListAsync();
            return _mapper.Map<List<OrderManageDTO>>(orders);
        }

        public async Task<OrderManageDTO?> GetOrderByIdAsync(int orderId)
        {
            var order = await _context.Orders.Include(o => o.User)
                                  .FirstOrDefaultAsync(o => o.OrderId == orderId);
            return _mapper.Map<OrderManageDTO>(order);
        }

        public async Task AddOrderAsync(OrderManageDTO orderDto)
        {
            var order = _mapper.Map<Order>(orderDto);
            order.CreatedAt = DateTime.UtcNow;
            order.UpdatedAt = DateTime.UtcNow;
            _context.Orders.Add(order);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateOrderAsync(OrderManageDTO orderDto)
        {
            var order = await _context.Orders.FindAsync(orderDto.OrderId);
            if (order == null) throw new KeyNotFoundException("Order không tìm thấy.");

            _mapper.Map(orderDto, order);
            order.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteOrderAsync(int orderId)
        {
            var order = await _context.Orders.FindAsync(orderId);
            if (order == null) throw new KeyNotFoundException("Order không tìm thấy.");

            _context.Orders.Remove(order);
            await _context.SaveChangesAsync();
        }

        public async Task<List<OrderManageDTO>> SearchOrdersAsync(string keyword)
        {
            var orders = await _context.Orders
                .Where(o => o.PhoneNumber.Contains(keyword) || o.OrderId.ToString() == keyword)
                .Include(o => o.User)
                .ToListAsync();

            return _mapper.Map<List<OrderManageDTO>>(orders);
        }
    }
}
