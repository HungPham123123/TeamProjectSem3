using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "Admin")]
    public class PromotionController : ControllerBase
    {
        private readonly IPromotionService _promotionService;

        public PromotionController(IPromotionService promotionService)
        {
            _promotionService = promotionService;
        }

        // Lấy danh sách tất cả promotions
        [HttpGet]
        public async Task<IActionResult> GetAllPromotions()
        {
            var promotions = await _promotionService.GetAllPromotionsAsync();
            return Ok(promotions);
        }

        // Thêm mới promotion
        [HttpPost]
        public async Task<IActionResult> AddPromotion([FromBody] PromotionCreateDTO promotionDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            await _promotionService.AddPromotionAsync(promotionDto);
            return StatusCode(201, new { message = "Promotion created successfully." });
        }
    }
}
