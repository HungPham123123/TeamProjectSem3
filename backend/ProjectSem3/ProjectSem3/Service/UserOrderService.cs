using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ProjectSem3.Service
{
    public class UserOrderService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UserOrderService(OnlineDvdsContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        // Method to get the current user's ID from the JWT token
        private int GetUserIdFromToken()
        {
            var token = _httpContextAccessor.HttpContext?.Request.Headers["Authorization"].ToString()?.Replace("Bearer ", string.Empty);

            if (string.IsNullOrEmpty(token))
            {
                throw new UnauthorizedAccessException("No token found in the request.");
            }

            var jwtHandler = new JwtSecurityTokenHandler();
            var jwtToken = jwtHandler.ReadJwtToken(token);
            var userIdClaim = jwtToken.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);

            if (userIdClaim == null)
            {
                throw new UnauthorizedAccessException("User ID not found in token.");
            }

            return int.Parse(userIdClaim.Value); 
        }

        // Method to retrieve orders for the current user
        public async Task<List<OrderDto>> GetAllOrdersForUser(int userId)
        {
            var orders = await _context.Orders
                .Where(o => o.UserId == userId)
                .Select(o => new OrderDto
                {
                    OrderId = o.OrderId,
                    UserId = o.UserId ?? 0,
                    FirstName = o.FirstName ?? string.Empty,
                    LastName = o.LastName ?? string.Empty,
                    Country = o.Country ?? string.Empty,
                    City = o.City ?? string.Empty,
                    Address = o.Address ?? string.Empty,
                    Optional = o.Optional ?? string.Empty,
                    ZipCode = o.ZipCode ?? string.Empty,
                    Email = o.User.Email ?? string.Empty,
                    PhoneNumber = o.PhoneNumber ?? string.Empty,
                    Tax = o.Tax ?? 0.0, 
                    TotalAmount = o.TotalAmount ?? 0m,
                    CreatedAt = o.CreatedAt ?? DateTime.MinValue,
                    UpdatedAt = o.UpdatedAt ?? DateTime.MinValue,
                    Status = o.Status ?? string.Empty,
                    OrderItems = o.OrderItems.Select(oi => new OrderItemDto
                    {
                        ProductId = oi.ProductId ?? 0,
                        ProductTitle = oi.Product.Title ?? string.Empty,
                        Quantity = oi.Quantity ?? 0,
                        Price = oi.Price ?? 0m, 
                        ProductImage = oi.Product.Image1 ?? string.Empty
                    }).ToList()
                })
                .ToListAsync(); 

            return orders;
        }

        public async Task<OrderDto> GetOrderById(int orderId)
        {
            var userId = GetUserIdFromToken();

            var order = await _context.Orders
                .Where(o => o.OrderId == orderId && o.UserId == userId)
                .Select(o => new OrderDto
                {
                    OrderId = o.OrderId,
                    UserId = o.UserId ?? 0,
                    FirstName = o.FirstName ?? string.Empty,
                    LastName = o.LastName ?? string.Empty,
                    Country = o.Country ?? string.Empty,
                    City = o.City ?? string.Empty,
                    Address = o.Address ?? string.Empty,
                    Optional = o.Optional ?? string.Empty,
                    ZipCode = o.ZipCode ?? string.Empty,
                    Email = o.User.Email ?? string.Empty,
                    PhoneNumber = o.PhoneNumber ?? string.Empty,
                    Tax = o.Tax ?? 0.0,
                    TotalAmount = o.TotalAmount ?? 0m,
                    CreatedAt = o.CreatedAt ?? DateTime.MinValue,
                    UpdatedAt = o.UpdatedAt ?? DateTime.MinValue,
                    Status = o.Status ?? string.Empty,
                    OrderItems = o.OrderItems.Select(oi => new OrderItemDto
                    {
                        ProductId = oi.ProductId ?? 0,
                        ProductTitle = oi.Product.Title ?? string.Empty,
                        Quantity = oi.Quantity ?? 0,
                        Price = oi.Price ?? 0m,
                        ProductImage = oi.Product.Image1 ?? string.Empty
                    }).ToList()
                })
                .FirstOrDefaultAsync();
            if (order == null)
            {
                throw new KeyNotFoundException("Order not found or you do not have permission to view this order.");
            }

            return order;
        }

    }
}
