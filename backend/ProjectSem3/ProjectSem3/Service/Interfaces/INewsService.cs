using ProjectSem3.DTOs;

namespace ProjectSem3.Service.Interfaces
{
    public interface INewsService
    {
        Task<List<NewsManageDTO>> GetAllNewsAsync();
        Task<NewsManageDTO?> GetNewsByIdAsync(int newsId);
        Task AddNewsAsync(NewsManageDTO newsDto);
        Task UpdateNewsAsync(NewsManageDTO newsDto);
        Task DeleteNewsAsync(int newsId);
        Task<List<NewsManageDTO>> SearchNewsAsync(string keyword);
    }
}
