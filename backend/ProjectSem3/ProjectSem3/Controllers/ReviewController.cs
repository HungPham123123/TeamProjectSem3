using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class ReviewController : ControllerBase
    {
        private readonly ReviewService _reviewService;

        public ReviewController(ReviewService reviewService)
        {
            _reviewService = reviewService;
        }

        // Lấy danh sách tất cả reviews
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
            try
            {
                var review = await _reviewService.GetReviewByIdAsync(reviewId);
                return Ok(review);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }

        // Thêm review mới
        [HttpPost]
        public async Task<IActionResult> AddReview([FromBody] AddReviewDTO reviewDto)
        {
            var reviewId = await _reviewService.AddReviewAsync(reviewDto);
            return CreatedAtAction(nameof(GetReviewById), new { reviewId }, reviewDto);
        }


        // Cập nhật review
        [HttpPut("{reviewId}")]
        public async Task<IActionResult> UpdateReview(int reviewId, [FromBody] UpdateReviewDto reviewDto)
        {
            try
            {
                await _reviewService.UpdateReviewAsync(reviewId, reviewDto);
                return NoContent();
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }


        // Xóa review
        [HttpDelete("{reviewId}")]
        public async Task<IActionResult> DeleteReview(int reviewId)
        {
            try
            {
                await _reviewService.DeleteReviewAsync(reviewId);
                return NoContent();
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }

        // Tìm kiếm reviews
        [HttpGet("search")]
        public async Task<IActionResult> SearchReviews([FromQuery] string keyword)
        {
            var reviews = await _reviewService.SearchReviewsAsync(keyword);
            return Ok(reviews);
        }
    }
}
