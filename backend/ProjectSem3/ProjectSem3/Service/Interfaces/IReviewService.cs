using ProjectSem3.DTOs;

namespace ProjectSem3.Service.Interfaces
{
    public interface IReviewService
    {
        Task<List<ReviewManageDTO>> GetAllReviewsAsync();
        Task<ReviewManageDTO?> GetReviewByIdAsync(int reviewId);
        Task AddReviewAsync(ReviewManageDTO reviewDto);
        Task UpdateReviewAsync(ReviewManageDTO reviewDto);
        Task DeleteReviewAsync(int reviewId);
        Task<List<ReviewManageDTO>> SearchReviewsAsync(string keyword);
    }
}
