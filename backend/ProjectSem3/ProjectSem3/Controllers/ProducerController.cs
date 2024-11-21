using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service;

[Route("api/[controller]")]
[ApiController]
public class ProducerController : ControllerBase
{
    private readonly ProducerService _producerService;

    public ProducerController(ProducerService producerService)
    {
        _producerService = producerService;
    }

    // Lấy tất cả các nhà sản xuất
    [HttpGet]
    public IActionResult GetProducers()
    {
        var producers = _producerService.GetAllProducers();
        return Ok(producers);
    }

    // Lấy nhà sản xuất theo ID
    [HttpGet("{id}")]
    public IActionResult GetProducer(int id)
    {
        var producer = _producerService.GetProducerById(id);
        if (producer == null)
        {
            return NotFound("Producer not found.");
        }
        return Ok(producer);
    }

    // Thêm nhà sản xuất mới
    [HttpPost]
    public IActionResult AddProducer([FromBody] AddProducerDto addProducerDto)
    {
        if (addProducerDto == null)
        {
            return BadRequest("Invalid producer data.");
        }

        var producer = _producerService.AddProducer(addProducerDto);
        return CreatedAtAction(nameof(GetProducer), new { id = producer.ProducerId }, producer);
    }

    // Cập nhật thông tin nhà sản xuất
    [HttpPut("{id}")]
    public IActionResult UpdateProducer(int id, [FromBody] UpdateProducerDto updateProducerDto)
    {
        if (updateProducerDto == null)
        {
            return BadRequest("Invalid producer data.");
        }

        try
        {
            var producer = _producerService.UpdateProducer(id, updateProducerDto);
            return Ok(producer);
        }
        catch (Exception ex)
        {
            return NotFound(ex.Message);
        }
    }

    // Xóa nhà sản xuất
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProducer(int id)
    {
        var result = await _producerService.DeleteProducer(id);
        if (!result)
        {
            return NotFound("Producer not found.");
        }
        return NoContent();
    }

    // Tìm kiếm nhà sản xuất
    [HttpGet("search")]
    public IActionResult SearchProducers([FromQuery] string keyword)
    {
        var producers = _producerService.SearchProducers(keyword);
        return Ok(producers);
    }
}
