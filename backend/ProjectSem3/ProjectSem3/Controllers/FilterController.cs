/* using Microsoft.AspNetCore.Mvc;
using ProjectSem3.Service;
using ProjectSem3.DTOs;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FilterController : ControllerBase
    {
        private readonly FilterService _filterService;

        public FilterController(FilterService filterService)
        {
            _filterService = filterService;
        }

        // Get all albums
        [HttpGet("albums")]
        public async Task<IActionResult> GetAllAlbums()
        {
            var albums = await _filterService.GetAllAlbumsAsync();
            if (albums == null || albums.Count == 0)
            {
                return NotFound(new { message = "No albums found." });
            }
            return Ok(albums);
        }

        // Get all movies
        [HttpGet("movies")]
        public async Task<IActionResult> GetAllMovies()
        {
            var movies = await _filterService.GetAllMoviesAsync();
            if (movies == null || movies.Count == 0)
            {
                return NotFound(new { message = "No movies found." });
            }
            return Ok(movies);
        }

        // Get all games
        [HttpGet("games")]
        public async Task<IActionResult> GetAllGames()
        {
            var games = await _filterService.GetAllGamesAsync();
            if (games == null || games.Count == 0)
            {
                return NotFound(new { message = "No games found." });
            }
            return Ok(games);
        }
    }
}
*/