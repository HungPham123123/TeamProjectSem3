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

        public async Task<List<OrderResponseDTO>> GetAllOrdersAsync()
        {
            var orders = await _context.Orders.Include(o => o.User).Include(o => o.Payment).ToListAsync();
            return _mapper.Map<List<OrderResponseDTO>>(orders);
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
