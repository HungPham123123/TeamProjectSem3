using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Service
{
    public class ReviewService : IReviewService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public ReviewService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<ReviewManageDTO>> GetAllReviewsAsync()
        {
            var reviews = await _context.Reviews.Include(r => r.User).Include(r => r.Product).ToListAsync();
            return _mapper.Map<List<ReviewManageDTO>>(reviews);
        }

        public async Task<ReviewManageDTO?> GetReviewByIdAsync(int reviewId)
        {
            var review = await _context.Reviews.Include(r => r.User).Include(r => r.Product)
                              .FirstOrDefaultAsync(r => r.ReviewId == reviewId);
            return _mapper.Map<ReviewManageDTO>(review);
        }

        public async Task AddReviewAsync(ReviewManageDTO reviewDto)
        {
            var review = _mapper.Map<Review>(reviewDto);
            review.CreatedAt = DateTime.UtcNow;
            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateReviewAsync(ReviewManageDTO reviewDto)
        {
            var review = await _context.Reviews.FindAsync(reviewDto.ReviewId);
            if (review == null) throw new KeyNotFoundException("Review không tìm thấy.");

            _mapper.Map(reviewDto, review);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteReviewAsync(int reviewId)
        {
            var review = await _context.Reviews.FindAsync(reviewId);
            if (review == null) throw new KeyNotFoundException("Review không tìm thấy.");

            _context.Reviews.Remove(review);
            await _context.SaveChangesAsync();
        }

        public async Task<List<ReviewManageDTO>> SearchReviewsAsync(string keyword)
        {
            var reviews = await _context.Reviews
                .Where(r => r.Comment.Contains(keyword) || r.User.Username.Contains(keyword) || r.Product.Title.Contains(keyword))
                .Include(r => r.User)
                .Include(r => r.Product)
                .ToListAsync();

            return _mapper.Map<List<ReviewManageDTO>>(reviews);
        }
    }
}
