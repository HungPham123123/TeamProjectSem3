using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Service
{
    public class CategoryService : ICategoryService
    {
        private readonly OnlineDvdsContext _context;
        public CategoryService(OnlineDvdsContext context) {
            _context = context;
        }
        public async Task<IEnumerable<Category>> GetAllCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        public async Task<Category?> GetCategoryByName(string name)
        {
            return await _context.Categories
                .FirstOrDefaultAsync(c => c.CategoryName.ToLower() == name.ToLower());
        }

        public async Task AddCategory(CategoryDTO categoryDto)
        {
            try
            {
                
                var category = new Category
                {
                    CategoryName = categoryDto.CategoryName,
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };

                await _context.Categories.AddAsync(category);
                await _context.SaveChangesAsync();
            }
            catch (Exception ex)
            {
                throw;
            }

        }
        public async Task<bool> UpdateCategory(int id, CategoryDTO updatedCategory)
        {        
            var category = await _context.Categories.FindAsync(id);
            if (category == null) { 
                return false;
            }
                
                category.CategoryName = updatedCategory.CategoryName;
                category.UpdatedAt = DateTime.UtcNow;

                _context.SaveChanges();

            return true;
        }

        public async Task DeleteCategory(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category != null) { 
                _context.Categories.Remove(category);
                await _context.SaveChangesAsync();
            }
        }

    }
}
