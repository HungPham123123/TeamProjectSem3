using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Service
{
    public class PromotionService : IPromotionService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public PromotionService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<PromotionManageDTO>> GetAllPromotionsAsync()
        {
            var promotions = await _context.Promotions.Include(p => p.Product).ToListAsync();
            return _mapper.Map<List<PromotionManageDTO>>(promotions);
        }

        public async Task AddPromotionAsync(PromotionCreateDTO promotionDto)
        {
            // Mapping từ PromotionCreateDTO sang Promotion
            var promotion = _mapper.Map<Promotion>(promotionDto);

            // Gán các trường tự động
            promotion.CreatedAt = DateTime.UtcNow;
            promotion.UpdatedAt = DateTime.UtcNow;

            // Thêm vào context và lưu
            _context.Promotions.Add(promotion);
            await _context.SaveChangesAsync();
        }
    }
}
