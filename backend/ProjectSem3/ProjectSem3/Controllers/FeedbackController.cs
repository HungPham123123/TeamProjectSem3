using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FeedbackController : ControllerBase
    {
        private readonly IFeedbackService _feedbackService;

        public FeedbackController(IFeedbackService feedbackService)
        {
            _feedbackService = feedbackService;
        }

        // Lấy danh sách tất cả feedback
        [HttpGet]
        public async Task<IActionResult> GetAllFeedbacks()
        {
            var feedbacks = await _feedbackService.GetAllFeedbacksAsync();
            return Ok(feedbacks);
        }

        // Xóa một feedback
        [HttpDelete("{feedbackId}")]
        public async Task<IActionResult> DeleteFeedback(int feedbackId)
        {
            await _feedbackService.DeleteFeedbackAsync(feedbackId);
            return NoContent();
        }

        // Trả lời một feedback
        [HttpPut("reply/{feedbackId}")]
        public async Task<IActionResult> ReplyToFeedback(int feedbackId, [FromBody] string replyText)
        {
            await _feedbackService.ReplyToFeedbackAsync(feedbackId, replyText);
            return Ok();
        }

        // Tìm kiếm feedbacks
        [HttpGet("search")]
        public async Task<IActionResult> SearchFeedbacks([FromQuery] string keyword)
        {
            var feedbacks = await _feedbackService.SearchFeedbacksAsync(keyword);
            return Ok(feedbacks);
        }
    }
}
