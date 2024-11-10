using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsController : ControllerBase
    {
        private readonly INewsService _newsService;

        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        // Lấy danh sách tất cả tin tức
        [HttpGet]
        public async Task<IActionResult> GetAllNews()
        {
            var news = await _newsService.GetAllNewsAsync();
            return Ok(news);
        }

        // Lấy tin tức theo ID
        [HttpGet("{newsId}")]
        public async Task<IActionResult> GetNewsById(int newsId)
        {
            var news = await _newsService.GetNewsByIdAsync(newsId);
            if (news == null) return NotFound("News không tìm thấy.");

            return Ok(news);
        }

        // Thêm mới tin tức
        [HttpPost]
        public async Task<IActionResult> AddNews([FromBody] NewsManageDTO newsDto)
        {
            await _newsService.AddNewsAsync(newsDto);
            return CreatedAtAction(nameof(GetNewsById), new { newsId = newsDto.NewsId }, newsDto);
        }

        // Cập nhật tin tức
        [HttpPut("{newsId}")]
        public async Task<IActionResult> UpdateNews(int newsId, [FromBody] NewsManageDTO newsDto)
        {
            if (newsId != newsDto.NewsId) return BadRequest("ID tin tức không khớp.");
            await _newsService.UpdateNewsAsync(newsDto);
            return NoContent();
        }

        // Xóa tin tức
        [HttpDelete("{newsId}")]
        public async Task<IActionResult> DeleteNews(int newsId)
        {
            await _newsService.DeleteNewsAsync(newsId);
            return NoContent();
        }


        // Tìm kiếm tin tức
        [HttpGet("search")]
        public async Task<IActionResult> SearchNews([FromQuery] string keyword)
        {
            var news = await _newsService.SearchNewsAsync(keyword);
            return Ok(news);
        }
    }
}
