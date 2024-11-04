using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Models;

namespace ProjectSem3.Service.Interfaces
{
    public interface ICategoryService
    {
        Task<IEnumerable<Category>> GetAllCategories();
        Task<Category?> GetCategoryByName(String name);
        Task AddCategory(CategoryDTO categoryDto);
        Task<bool> UpdateCategory(int id,CategoryDTO updatedCategory);
        Task DeleteCategory(int id);
    }
}
