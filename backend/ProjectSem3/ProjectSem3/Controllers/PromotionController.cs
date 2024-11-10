using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PromotionController : ControllerBase
    {
        private readonly IPromotionService _promotionService;

        public PromotionController(IPromotionService promotionService)
        {
            _promotionService = promotionService;
        }

        // Lấy danh sách tất cả promotion
        [HttpGet]
        public async Task<IActionResult> GetAllPromotions()
        {
            var promotions = await _promotionService.GetAllPromotionsAsync();
            return Ok(promotions);
        }

        // Thêm mới promotion
        [HttpPost]
        public async Task<IActionResult> AddPromotion([FromBody] PromotionManageDTO promotionDto)
        {
            await _promotionService.AddPromotionAsync(promotionDto);
            return CreatedAtAction(nameof(GetAllPromotions), new { promotionId = promotionDto.PromotionId }, promotionDto);
        }
    }
}
