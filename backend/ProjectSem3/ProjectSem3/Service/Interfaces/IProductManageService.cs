using ProjectSem3.DTOs;

namespace ProjectSem3.Service.Interfaces
{
    public interface IProductManageService
    {
        Task<List<ProductManageDTO>> GetAllProductsAsync();
        Task<ProductManageDTO?> GetProductByIdAsync(int productId);
        Task AddProductAsync(ProductManageDTO productDto);
        Task UpdateProductAsync(ProductManageDTO productDto);
        Task DeleteProductAsync(int productId);
        Task<List<ProductManageDTO>> SearchProductsAsync(string keyword);
    }
}
