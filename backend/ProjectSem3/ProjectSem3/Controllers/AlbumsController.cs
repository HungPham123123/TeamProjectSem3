using Microsoft.AspNetCore.Mvc;
using ProjectSem3.Models;
using ProjectSem3.DTOs;
using ProjectSem3.Service;
using Microsoft.AspNetCore.Authorization;

[Route("api/[controller]")]
[ApiController]
public class AlbumsController : ControllerBase
{
    private readonly AlbumService _albumService;

    public AlbumsController(AlbumService albumService)
    {
        _albumService = albumService;
    }

    // View all albums
    [HttpGet]
    public IActionResult GetAllAlbums()
    {
        var albums = _albumService.GetAllAlbums();
        return Ok(albums);
    }

    // Add a new album
    [Authorize(Roles = "Admin")]
    [HttpPost]
    public IActionResult AddAlbum([FromBody] AddAlbumDto addAlbumDto)
    {
        try
        {
            var album = _albumService.AddAlbum(addAlbumDto);
            return CreatedAtAction(nameof(AddAlbum), new { id = album.AlbumId }, album);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    // update album
    [Authorize(Roles = "Admin")]
    [HttpPut("{id}")]
    public IActionResult UpdateAlbum(int id, [FromBody] UpdateAlbumDto updateAlbumDto)
    {
        try
        {
            var album = _albumService.UpdateAlbum(id, updateAlbumDto);
            return Ok(album);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [Authorize(Roles = "Admin")]
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteAlbum(int id)
    {
        var result = await _albumService.DeleteAlbum(id);
        if (result)
        {
            return NoContent(); // Xóa thành công, trả về NoContent (204)
        }
        return NotFound(); // Nếu không tìm thấy album để xóa, trả về NotFound (404)
    }


    // Get album by ID
    [Authorize(Roles = "Admin")]
    [HttpGet("{id}")]
    public IActionResult GetAlbumById(int id)
    {
        var album = _albumService.GetAlbumById(id);
        if (album == null) return NotFound();
        return Ok(album);
    }

    // Search albums
    [HttpGet("search")]
    public IActionResult SearchAlbums(string keyword)
    {
        var albums = _albumService.SearchAlbums(keyword);
        return Ok(albums);
    }
}
