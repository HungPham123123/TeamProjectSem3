using ProjectSem3.DTOs;

namespace ProjectSem3.Service.Interfaces
{
    public interface IPromotionService
    {
        Task<List<PromotionManageDTO>> GetAllPromotionsAsync();
        Task AddPromotionAsync(PromotionManageDTO promotionDto);
    }
}
