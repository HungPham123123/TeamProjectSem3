using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectSem3.Service;
using ProjectSem3.DTOs;
using System.Security.Claims;
using ProjectSem3.DTOs;

namespace ProjectSem3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class CartController : ControllerBase
    {
        private readonly CartService _cartService;

        public CartController(CartService cartService)
        {
            _cartService = cartService;
        }

        [HttpGet]
        public IActionResult ShowCart()
        {
            var userId = GetUserId();
            if (userId == null) return Unauthorized();

            var cartDto = _cartService.ShowCart(userId.Value);
            return Ok(cartDto);
        }

        [HttpPost("add")]
        public IActionResult AddProduct([FromBody] AddProductToCartRequest request)
        {
            var userId = GetUserId();
            if (userId == null) return Unauthorized();

            var result = _cartService.AddProductToCart(userId.Value, request.ProductId, request.Quantity);
            return result is IActionResult actionResult ? actionResult : BadRequest("Failed to add product.");
        }



        [HttpPut("update")]
        public IActionResult UpdateQuantity([FromBody] UpdateQuantityDto updateQuantityDto)
        {
            Console.WriteLine($"Received update quantity request: ProductId={updateQuantityDto.ProductId}, Quantity={updateQuantityDto.Quantity}");

            var userId = GetUserId();
            if (userId == null) return Unauthorized();

            var result = _cartService.UpdateQuantity(userId.Value, updateQuantityDto.ProductId, updateQuantityDto.Quantity);
            return result ? Ok("Quantity updated.") : BadRequest("Failed to update quantity.");
        }


        [HttpDelete("delete/{productId}")]
        public IActionResult DeleteProduct(int productId)
        {
            var userId = GetUserId();
            if (userId == null) return Unauthorized();

            var result = _cartService.DeleteAllProductInstancesById(userId.Value, productId);
            return result ? Ok("All instances of the product removed from cart.") : BadRequest("Failed to remove product.");
        }


        private int? GetUserId()
        {
            if (User.Identity is ClaimsIdentity identity)
            {
                var userIdClaim = identity.FindFirst("UserId");

                return userIdClaim != null ? int.Parse(userIdClaim.Value) : (int?)null;
            }
            return null;
        }
    }
}
