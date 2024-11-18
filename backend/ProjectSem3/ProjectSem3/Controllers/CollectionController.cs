using Microsoft.AspNetCore.Mvc;
using ProjectSem3.Dtos;
using ProjectSem3.DTOs;
using ProjectSem3.Service;
using Microsoft.AspNetCore.Authorization;
using System.Threading.Tasks;
using System.Security.Claims;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize] // Ensure user is authenticated
    public class CollectionController : ControllerBase
    {
        private readonly CollectionService _collectionService;

        public CollectionController(CollectionService collectionService)
        {
            _collectionService = collectionService;
        }

        // Helper method to get the userId from the JWT token
        private int GetUserIdFromToken()
        {
            var userIdClaim = User.FindFirst(ClaimTypes.NameIdentifier); // 'sub' or 'userId' depending on the token structure
            return userIdClaim != null && int.TryParse(userIdClaim.Value, out var userId) ? userId : 0;
        }

        // Get user's collection
        [HttpGet("collection")]
        public async Task<ActionResult<CollectionDto>> GetUserCollection()
        {
            try
            {
                int userId = GetUserIdFromToken(); // Get the user ID from the token
                if (userId == 0)
                {
                    return Unauthorized("User ID not found in token.");
                }

                var collectionDto = await _collectionService.GetUserCollection(userId);
                return Ok(collectionDto);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error fetching collection: {ex.Message}");
            }
        }

        // Add product to user's collection
        [HttpPost("add/{productId}")]
        public async Task<ActionResult> AddItemToCollection(int productId)
        {
            try
            {
                int userId = GetUserIdFromToken(); // Get the user ID from the token
                if (userId == 0)
                {
                    return Unauthorized("User ID not found in token.");
                }

                await _collectionService.AddItemToCollection(userId, productId);
                return Ok("Product added to collection.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error adding item: {ex.Message}");
            }
        }

        // Remove product from user's collection
        [HttpDelete("remove/{productId}")]
        public async Task<ActionResult> RemoveItemFromCollection(int productId)
        {
            try
            {
                int userId = GetUserIdFromToken(); // Get the user ID from the token
                if (userId == 0)
                {
                    return Unauthorized("User ID not found in token.");
                }

                await _collectionService.RemoveItemFromCollection(userId, productId);
                return Ok("Product removed from collection.");
            }
            catch (Exception ex)
            {
                return BadRequest($"Error removing item: {ex.Message}");
            }
        }

        // Get product details by ID
        [HttpGet("product/{productId}")]
        public async Task<ActionResult<ProductDto>> GetProductDetails(int productId)
        {
            try
            {
                var productDto = await _collectionService.GetProductDetails(productId);
                return Ok(productDto);
            }
            catch (Exception ex)
            {
                return BadRequest($"Error fetching product details: {ex.Message}");
            }
        }
    }
}
