using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GamesController : ControllerBase
    {
        private readonly ISGMService<GameDTO> _gameService;

        public GamesController(ISGMService<GameDTO> gameService)
        {
            _gameService = gameService;
        }

        [HttpGet]
        public async Task<ActionResult<List<GameDTO>>> GetAll()
        {
            var games = await _gameService.GetAllAsync();
            return Ok(games);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GameDTO>> GetById(int id)
        {
            var game = await _gameService.GetByIdAsync(id);
            if (game == null) return NotFound();
            return Ok(game);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult> Add([FromBody] GameDTO gameDto)
        {
            await _gameService.AddAsync(gameDto);
            return CreatedAtAction(nameof(GetById), new { id = gameDto.GameId }, gameDto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, [FromBody] GameDTO gameDto)
        {
            if (id != gameDto.GameId) return BadRequest();
            await _gameService.UpdateAsync(gameDto);
            return NoContent();
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _gameService.DeleteAsync(id);
            return NoContent();
        }

        [HttpGet("search")]
        public async Task<ActionResult<List<GameDTO>>> Search(string searchTerm)
        {
            var games = await _gameService.SearchAsync(searchTerm);
            return Ok(games);
        }
    }

}
