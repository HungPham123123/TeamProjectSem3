using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service.Interfaces;
using ProjectSem3.Service;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ArtistController : ControllerBase
    {
        private readonly IArtistService _artistService;

        public ArtistController(IArtistService artistService)
        {
            _artistService = artistService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllArtists() =>
            Ok(await _artistService.GetAllArtistsAsync());

        [HttpGet("{id}")]
        public async Task<IActionResult> GetArtistById(int id)
        {
            var artist = await _artistService.GetArtistByIdAsync(id);
            return artist != null ? Ok(artist) : NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> AddArtist([FromBody] ArtistDTO artistDto)
        {
            var artist = await _artistService.AddArtistAsync(artistDto);
            return CreatedAtAction(nameof(GetArtistById), new { id = artist.ArtistId }, artist);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateArtist(int id, [FromBody] ArtistDTO artistDto)
        {
            var success = await _artistService.UpdateArtistAsync(id, artistDto);
            return success ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArtist(int id)
        {
            var success = await _artistService.DeleteArtistAsync(id);
            return success ? NoContent() : NotFound();
        }

        [HttpGet("search")]
        public async Task<IActionResult> SearchArtists([FromQuery] string term) =>
            Ok(await _artistService.SearchArtistsAsync(term));
    }
}
