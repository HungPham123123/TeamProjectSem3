using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly IReviewService _reviewService;

        public ReviewController(IReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        // Lấy danh sách tất cả review
        [HttpGet]
        public async Task<IActionResult> GetAllReviews()
        {
            var reviews = await _reviewService.GetAllReviewsAsync();
            return Ok(reviews);
        }

        // Lấy review theo ID
        [HttpGet("{reviewId}")]
        public async Task<IActionResult> GetReviewById(int reviewId)
        {
            var review = await _reviewService.GetReviewByIdAsync(reviewId);
            if (review == null) return NotFound("Review không tìm thấy.");

            return Ok(review);
        }

        // Thêm mới review
        [HttpPost]
        public async Task<IActionResult> AddReview([FromBody] ReviewManageDTO reviewDto)
        {
            await _reviewService.AddReviewAsync(reviewDto);
            return CreatedAtAction(nameof(GetReviewById), new { reviewId = reviewDto.ReviewId }, reviewDto);
        }

        // Cập nhật review
        [HttpPut("{reviewId}")]
        public async Task<IActionResult> UpdateReview(int reviewId, [FromBody] ReviewManageDTO reviewDto)
        {
            if (reviewId != reviewDto.ReviewId) return BadRequest("ID review không khớp.");
            await _reviewService.UpdateReviewAsync(reviewDto);
            return NoContent();
        }

        // Xóa review
        [HttpDelete("{reviewId}")]
        public async Task<IActionResult> DeleteReview(int reviewId)
        {
            await _reviewService.DeleteReviewAsync(reviewId);
            return NoContent();
        }

        // Tìm kiếm review
        [HttpGet("search")]
        public async Task<IActionResult> SearchReviews([FromQuery] string keyword)
        {
            var reviews = await _reviewService.SearchReviewsAsync(keyword);
            return Ok(reviews);
        }
    }
}
