using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;

namespace ProjectSem3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PublisherController : ControllerBase
    {
        private readonly PublisherService _publisherService;

        public PublisherController(PublisherService publisherService)
        {
            _publisherService = publisherService;
        }

        // Xem tất cả nhà xuất bản
        [HttpGet]
        public IActionResult GetAllPublishers()
        {
            var publishers = _publisherService.GetAllPublishers();
            return Ok(publishers);
        }

        // Xem nhà xuất bản theo ID
        [HttpGet("{id}")]
        public IActionResult GetPublisherById(int id)
        {
            var publisher = _publisherService.GetPublisherById(id);
            if (publisher == null) return NotFound();
            return Ok(publisher);
        }

        // Thêm nhà xuất bản mới
        [HttpPost]
        public IActionResult AddPublisher([FromBody] AddPublisherDto addPublisherDto)
        {
            try
            {
                var publisher = _publisherService.AddPublisher(addPublisherDto);
                return CreatedAtAction(nameof(GetPublisherById), new { id = publisher.PublisherId }, publisher);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // Cập nhật thông tin nhà xuất bản
        [HttpPut("{id}")]
        public IActionResult UpdatePublisher(int id, [FromBody] UpdatePublisherDto updatePublisherDto)
        {
            try
            {
                var publisher = _publisherService.UpdatePublisher(id, updatePublisherDto);
                return Ok(publisher);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        // Xóa nhà xuất bản
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePublisher(int id)
        {
            var result = await _publisherService.DeletePublisher(id);
            if (result)
            {
                return NoContent();
            }
            return NotFound();
        }

        // Tìm kiếm nhà xuất bản
        [HttpGet("search")]
        public IActionResult SearchPublishers([FromQuery] string keyword)
        {
            var publishers = _publisherService.SearchPublishers(keyword);
            return Ok(publishers);
        }
    }

}
