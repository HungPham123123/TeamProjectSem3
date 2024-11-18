using Microsoft.AspNetCore.Mvc;
using ProjectSem3.Service;
using ProjectSem3.Dtos;

namespace ProjectSem3.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly ProductService _productService;

        public ProductsController(ProductService productService)
        {
            _productService = productService;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProductDto>>> GetProducts()
        {
            var products = await _productService.GetAllProductsAsync();
            return Ok(products);
        }


        [HttpGet("{id}")]
        public async Task<ActionResult<ProductDto>> GetProductById(int id)
        {
            var product = await _productService.GetProductByIdAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        [HttpGet("on-selling")]
        public async Task<ActionResult<List<ProductDto>>> GetOnSellingProducts()
        {
            var products = await _productService.GetOnSellingProductsAsync();
            return Ok(products);
        }

        [HttpGet("new-arrivals")]
        public async Task<ActionResult<List<ProductDto>>> GetNewArrivals()
        {
            var products = await _productService.GetNewArrivalsAsync();
            return Ok(products);
        }

        [HttpGet("best-budget-dvds")]
        public async Task<ActionResult<List<ProductDto>>> GetBestBudgetDvs()
        {
            var products = await _productService.GetBestBudgetDvsAsync();
            return Ok(products);
        }
    }


}
