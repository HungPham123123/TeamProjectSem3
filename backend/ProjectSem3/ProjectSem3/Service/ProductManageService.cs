using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Service
{
    public class ProductManageService : IProductManageService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public ProductManageService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<ProductManageDTO>> GetAllProductsAsync()
        {
            var products = await _context.Products.Include(p => p.Category).ToListAsync();
            return _mapper.Map<List<ProductManageDTO>>(products);
        }

        public async Task<ProductManageDTO?> GetProductByIdAsync(int productId)
        {
            var product = await _context.Products.Include(p => p.Category)
                                 .FirstOrDefaultAsync(p => p.ProductId == productId);
            return _mapper.Map<ProductManageDTO>(product);
        }

        public async Task AddProductAsync(ProductManageDTO productDto)
        {
            var product = _mapper.Map<Product>(productDto);
            product.CreatedAt = DateTime.UtcNow;
            product.UpdatedAt = DateTime.UtcNow;
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateProductAsync(ProductManageDTO productDto)
        {
            var product = await _context.Products.FindAsync(productDto.ProductId);
            if (product == null) throw new KeyNotFoundException("Product không tìm thấy.");

            _mapper.Map(productDto, product);
            product.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteProductAsync(int productId)
        {
            var product = await _context.Products.FindAsync(productId);
            if (product == null) throw new KeyNotFoundException("Product không tìm thấy.");

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();
        }

        public async Task<List<ProductManageDTO>> SearchProductsAsync(string keyword)
        {
            var products = await _context.Products
                .Where(p => p.Title.Contains(keyword) || p.ProductId.ToString() == keyword)
                .Include(p => p.Category)
                .ToListAsync();

            return _mapper.Map<List<ProductManageDTO>>(products);
        }
    }
}
