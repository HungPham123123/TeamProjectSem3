using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;

[Route("api/[controller]")]
[ApiController]
public class NewsController : ControllerBase
{
    private readonly NewsService _newsService;

    public NewsController(NewsService newsService)
    {
        _newsService = newsService;
    }

    [HttpGet]
    public IActionResult GetAllNews()
    {
        var news = _newsService.GetAllNews();
        return Ok(news);
    }

    [HttpGet("{id}")]
    public IActionResult GetNewsById(int id)
    {
        var news = _newsService.GetNewsById(id);
        if (news == null)
        {
            return NotFound();
        }
        return Ok(news);
    }

    [HttpPost]
    public IActionResult AddNews([FromBody] AddNewsDto addNewsDto)
    {
        var news = _newsService.AddNews(addNewsDto);
        return CreatedAtAction(nameof(GetNewsById), new { id = news.NewsId }, news);
    }

    [HttpPut("{id}")]
    public IActionResult UpdateNews(int id, [FromBody] UpdateNewsDto updateNewsDto)
    {
        try
        {
            var updatedNews = _newsService.UpdateNews(id, updateNewsDto);
            return Ok(updatedNews);
        }
        catch (Exception)
        {
            return NotFound();
        }
    }


    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteNews(int id)
    {
        var result = await _newsService.DeleteNews(id);  
        if (result)
        {
            return NoContent();
        }
        return NotFound();
    }


    [HttpPost("search")]
    public IActionResult SearchNews([FromBody] string keyword)
    {
        var news = _newsService.SearchNews(keyword);
        return Ok(news);
    }
}
