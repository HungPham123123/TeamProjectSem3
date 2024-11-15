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

        // Inject the FilterService via constructor
        public FilterController(FilterService filterService)
        {
            _filterService = filterService;
        }

        // Endpoint to get all game product details
        [HttpGet("games")]
        public ActionResult<List<ProductDetailDto>> GetAllGameProductDetails()
        {
            var gameProductDetails = _filterService.GetAllGameProductDetails();
            if (gameProductDetails == null || gameProductDetails.Count == 0)
            {
                return NotFound("No game products found.");
            }
            return Ok(gameProductDetails);
        }

        // Endpoint to get all movie product details
        [HttpGet("movies")]
        public ActionResult<List<ProductDetailDto>> GetAllMovieProductDetails()
        {
            var movieProductDetails = _filterService.GetAllMovieProductDetails();
            if (movieProductDetails == null || movieProductDetails.Count == 0)
            {
                return NotFound("No movie products found.");
            }
            return Ok(movieProductDetails);
        }

        // Endpoint to get all album product details
        [HttpGet("albums")]
        public ActionResult<List<ProductDetailDto>> GetAllAlbumProductDetails()
        {
            var albumProductDetails = _filterService.GetAllAlbumProductDetails();
            if (albumProductDetails == null || albumProductDetails.Count == 0)
            {
                return NotFound("No album products found.");
            }
            return Ok(albumProductDetails);
        }
    }
}
