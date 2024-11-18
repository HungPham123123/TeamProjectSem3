using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;

namespace ProjectSem3.Service
{
    public class UserReviewService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public UserReviewService(OnlineDvdsContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

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

        public async Task<bool> CanUserReviewProduct(int productId)
        {
            var userId = GetUserIdFromToken();

            // Check if the product is in any completed order of the user
            var purchasedProduct = await _context.OrderItems
                .Include(oi => oi.Order)
                .Where(oi => oi.ProductId == productId && oi.Order.UserId == userId && oi.Order.Status == "Completed")
                .FirstOrDefaultAsync();

            return purchasedProduct != null;
        }

        public async Task AddReview(int productId, decimal rating, string comment)
        {
            if (!await CanUserReviewProduct(productId))
            {
                throw new InvalidOperationException("You can only review products you have purchased.");
            }

            var userId = GetUserIdFromToken();

            var existingReview = await _context.Reviews
                .FirstOrDefaultAsync(r => r.ProductId == productId && r.UserId == userId);

            if (existingReview != null)
            {
                throw new InvalidOperationException("You have already reviewed this product.");
            }

            var review = new Review
            {
                UserId = userId,
                ProductId = productId,
                Rating = rating,
                Comment = comment,
                CreatedAt = DateTime.UtcNow
            };

            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> HasUserReviewedProduct(int productId)
        {
            var userId = GetUserIdFromToken();

            // Check if the user has already reviewed the product
            var review = await _context.Reviews
                .FirstOrDefaultAsync(r => r.ProductId == productId && r.UserId == userId);

            return review != null;
        }

        public async Task<List<ReviewDto>> GetProductReviews(int productId)
        {
            var reviews = await _context.Reviews
                .Where(r => r.ProductId == productId)
                .Include(r => r.User)
                .OrderByDescending(r => r.CreatedAt)
                .Select(r => new ReviewDto
                {
                    UserId = r.User.UserId, 
                    Username = r.User.Username ?? "", 
                    ProductId = r.ProductId ?? 0, 
                    Rating = r.Rating ?? 0m, 
                    Comment = r.Comment ?? "", 
                    CreatedAt = r.CreatedAt ?? DateTime.MinValue 
                })
                .ToListAsync();

            return reviews;
        }

    }
}
