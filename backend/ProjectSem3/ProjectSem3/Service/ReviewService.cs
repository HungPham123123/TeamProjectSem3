using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;

namespace ProjectSem3.Service
{
    public class ReviewService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public ReviewService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // Lấy tất cả reviews
        public async Task<List<ReviewManageDTO>> GetAllReviewsAsync()
        {
            var reviews = await _context.Reviews
                .Include(r => r.User)
                .Include(r => r.Product)
                .ToListAsync();
            return _mapper.Map<List<ReviewManageDTO>>(reviews);
        }

        // Lấy review theo ID
        public async Task<ReviewManageDTO?> GetReviewByIdAsync(int reviewId)
        {
            var review = await _context.Reviews
                .Include(r => r.User)
                .Include(r => r.Product)
                .FirstOrDefaultAsync(r => r.ReviewId == reviewId);

            if (review == null)
                throw new KeyNotFoundException("Review không tìm thấy.");

            return _mapper.Map<ReviewManageDTO>(review);
        }

        // Thêm review mới
        public async Task<int> AddReviewAsync(AddReviewDTO reviewDto)
        {
            var review = _mapper.Map<Review>(reviewDto);
            review.CreatedAt = DateTime.UtcNow;

            _context.Reviews.Add(review);
            await _context.SaveChangesAsync();

            return review.ReviewId; // Lấy ID từ entity sau khi lưu
        }


        // Cập nhật review
        public async Task UpdateReviewAsync(int reviewId, UpdateReviewDto updateReviewDto)
        {
            var review = await _context.Reviews.FirstOrDefaultAsync(r => r.ReviewId == reviewId);
            if (review == null)
            {
                throw new KeyNotFoundException("Review không tìm thấy.");
            }

            review.Rating = updateReviewDto.Rating ?? review.Rating;
            review.Comment = updateReviewDto.Comment ?? review.Comment;

            await _context.SaveChangesAsync();
        }


        // Xóa review
        public async Task DeleteReviewAsync(int reviewId)
        {
            var review = await _context.Reviews.FindAsync(reviewId);
            if (review == null)
                throw new KeyNotFoundException("Review không tìm thấy.");

            _context.Reviews.Remove(review);
            await _context.SaveChangesAsync();
        }

        // Tìm kiếm reviews
        public async Task<List<ReviewManageDTO>> SearchReviewsAsync(string keyword)
        {
            var reviews = await _context.Reviews
                .Where(r => r.Comment.Contains(keyword) ||
                            r.User.Username.Contains(keyword) ||
                            r.Product.Title.Contains(keyword))
                .Include(r => r.User)
                .Include(r => r.Product)
                .ToListAsync();

            return _mapper.Map<List<ReviewManageDTO>>(reviews);
        }
    }
}
