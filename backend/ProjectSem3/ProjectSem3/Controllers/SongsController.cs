using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SongsController : ControllerBase
    {
        private readonly ISGMService<SongDTO> _songService;

        public SongsController(ISGMService<SongDTO> songService)
        {
            _songService = songService;
        }

        [HttpGet]
        public async Task<ActionResult<List<SongDTO>>> GetAll()
        {
            var songs = await _songService.GetAllAsync();
            return Ok(songs);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<SongDTO>> GetById(int id)
        {
            var song = await _songService.GetByIdAsync(id);
            if (song == null) return NotFound();
            return Ok(song);
        }

        [HttpPost]
        public async Task<ActionResult> Add([FromBody] SongDTO songDto)
        {
            await _songService.AddAsync(songDto);
            return CreatedAtAction(nameof(GetById), new { id = songDto.SongId }, songDto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, [FromBody] SongDTO songDto)
        {
            if (id != songDto.SongId) return BadRequest();
            await _songService.UpdateAsync(songDto);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _songService.DeleteAsync(id);
            return NoContent();
        }

        [HttpGet("search")]
        public async Task<ActionResult<List<SongDTO>>> Search(string searchTerm)
        {
            var songs = await _songService.SearchAsync(searchTerm);
            return Ok(songs);
        }
    }

}
