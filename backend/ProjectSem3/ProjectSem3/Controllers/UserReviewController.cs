using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service;

[ApiController]
[Route("api/[controller]")]
public class UserReviewController : ControllerBase
{
    private readonly UserReviewService _userReviewService;

    public UserReviewController(UserReviewService userReviewService)
    {
        _userReviewService = userReviewService;
    }

    // POST: api/UserReview/add
    [HttpPost("add")]
    public async Task<IActionResult> AddReview([FromBody] AddReviewDto dto)
    {
        if (dto == null)
        {
            return BadRequest(new { Error = "Review data cannot be null." });
        }

        try
        {
            await _userReviewService.AddReview(dto.ProductId, dto.Rating, dto.Comment);
            return Ok(new { Message = "Review added successfully." });
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status500InternalServerError, new { Error = ex.Message });
        }
    }

    [HttpGet("{orderId}/items/{productId}/review-status")]
    public async Task<IActionResult> GetReviewStatus(int orderId, int productId)
    {
        try
        {
            var hasReviewed = await _userReviewService.HasUserReviewedProduct(productId);

            if (hasReviewed)
            {
                return Ok(new { message = "This product has already been reviewed." });
            }
            else
            {
                return Ok(new { message = "You have not reviewed this product yet." });
            }
        }
        catch (Exception ex)
        {
            return BadRequest(new { message = ex.Message });
        }
    }

    [HttpGet("product/{productId}/reviews")]
    public async Task<IActionResult> ViewProductReviews(int productId)
    {
        var reviews = await _userReviewService.GetProductReviews(productId);

        if (reviews == null || !reviews.Any())
        {
            return NotFound("No reviews found for this product.");
        }

        // Return the reviews as a JSON response
        return Ok(reviews);
    }

}
