using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoryService _categoryService;

        public CategoriesController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCategories()
        {
            var categories = await _categoryService.GetAllCategories();
            return Ok(categories);
        }

        [HttpGet("{name}")]
        public async Task<IActionResult> GetCategoriesByName(String name)
        {
            var category = await _categoryService.GetCategoryByName(name);
            if (category == null)
            {
                return NotFound("not found");
            }

            return Ok(category);
        }

        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<IActionResult> AddCategory(CategoryDTO categoryDto)
        {
            if (categoryDto == null)
            {
                return BadRequest("cannot be null");
            }
            try
            {
                await _categoryService.AddCategory(categoryDto);
                return Ok(categoryDto);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateCategory(int id, CategoryDTO categoryDto)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest();
            }

            var result = await _categoryService.UpdateCategory(id, categoryDto);

            if (!result)
            {
                return NotFound("Not found cate");
            }

            return Ok("Updated");

        }

        [Authorize(Roles = "Admin")]
        [HttpDelete]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            await _categoryService.DeleteCategory(id);
            return Ok("deleted");
        }

    }
}
