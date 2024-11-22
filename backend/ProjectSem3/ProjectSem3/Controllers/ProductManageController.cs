using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class ProductController : ControllerBase
    {
        private readonly IProductManageService _productService;

        public ProductController(IProductManageService productService)
        {
            _productService = productService;
        }

        // Lấy danh sách tất cả sản phẩm
        [HttpGet]
        public async Task<IActionResult> GetAllProducts()
        {
            var products = await _productService.GetAllProductsAsync();
            return Ok(products);
        }

        // Lấy sản phẩm theo ID
        [HttpGet("{productId}")]
        public async Task<IActionResult> GetProductById(int productId)
        {
            var product = await _productService.GetProductByIdAsync(productId);
            if (product == null) return NotFound("Product không tìm thấy.");

            return Ok(product);
        }

        // Thêm mới sản phẩm
        [HttpPost]
        public async Task<IActionResult> AddProduct([FromBody] ProductManageDTO productDto)
        {
            await _productService.AddProductAsync(productDto);
            return CreatedAtAction(nameof(GetProductById), new { productId = productDto.ProductId }, productDto);
        }

        // Cập nhật sản phẩm
        [HttpPut("{productId}")]
        public async Task<IActionResult> UpdateProduct(int productId, [FromBody] ProductManageDTO productDto)
        {
            if (productId != productDto.ProductId) return BadRequest("ID sản phẩm không khớp.");
            await _productService.UpdateProductAsync(productDto);
            return NoContent();
        }

        // Xóa sản phẩm
        [HttpDelete("{productId}")]
        public async Task<IActionResult> DeleteProduct(int productId)
        {
            await _productService.DeleteProductAsync(productId);
            return NoContent();
        }

        // Tìm kiếm sản phẩm
        [HttpGet("search")]
        public async Task<IActionResult> SearchProducts([FromQuery] string keyword)
        {
            var products = await _productService.SearchProductsAsync(keyword);
            return Ok(products);
        }
    }
}
