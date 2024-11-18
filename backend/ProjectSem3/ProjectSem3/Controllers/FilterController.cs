using Microsoft.AspNetCore.Mvc;
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

        // Search albums
        [HttpGet("albums/search")]
        public async Task<IActionResult> SearchAlbums([FromQuery] string? searchTerm)
        {
            var albums = await _filterService.SearchAlbumsAsync(searchTerm);
            if (albums == null || albums.Count == 0)
            {
                return NotFound(new { message = "No albums found for the given search term." });
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

        // Search movies
        [HttpGet("movies/search")]
        public async Task<IActionResult> SearchMovies([FromQuery] string? searchTerm)
        {
            var movies = await _filterService.SearchMoviesAsync(searchTerm);
            if (movies == null || movies.Count == 0)
            {
                return NotFound(new { message = "No movies found for the given search term." });
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

        // Search games
        [HttpGet("games/search")]
        public async Task<IActionResult> SearchGames([FromQuery] string? searchTerm)
        {
            var games = await _filterService.SearchGamesAsync(searchTerm);
            if (games == null || games.Count == 0)
            {
                return NotFound(new { message = "No games found for the given search term." });
            }
            return Ok(games);
        }

        [HttpGet("products/search")]
        public async Task<IActionResult> GetAllProducts([FromQuery] string? searchterm)
        {
            var products = await _filterService.SearchAllProductsAsync(searchterm);
            return Ok(products);
        }

    }   
}
