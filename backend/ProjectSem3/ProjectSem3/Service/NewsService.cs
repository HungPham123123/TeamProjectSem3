using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Service
{
    public class NewsService : INewsService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public NewsService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<NewsManageDTO>> GetAllNewsAsync()
        {
            var newsList = await _context.News.Include(n => n.Author).Include(n => n.Category).ToListAsync();
            return _mapper.Map<List<NewsManageDTO>>(newsList);
        }

        public async Task<NewsManageDTO?> GetNewsByIdAsync(int newsId)
        {
            var news = await _context.News.Include(n => n.Author).Include(n => n.Category)
                              .FirstOrDefaultAsync(n => n.NewsId == newsId);
            return _mapper.Map<NewsManageDTO>(news);
        }

        public async Task AddNewsAsync(NewsManageDTO newsDto)
        {
            var news = _mapper.Map<News>(newsDto);
            news.PublishedAt = DateTime.UtcNow;
            news.UpdatedAt = DateTime.UtcNow;
            _context.News.Add(news);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateNewsAsync(NewsManageDTO newsDto)
        {
            var news = await _context.News.FindAsync(newsDto.NewsId);
            if (news == null) throw new KeyNotFoundException("News không tìm thấy.");

            _mapper.Map(newsDto, news);
            news.UpdatedAt = DateTime.UtcNow;
            await _context.SaveChangesAsync();
        }

        public async Task DeleteNewsAsync(int newsId)
        {
            var news = await _context.News.FindAsync(newsId);
            if (news == null) throw new KeyNotFoundException("News không tìm thấy.");

            _context.News.Remove(news);
            await _context.SaveChangesAsync();
        }

        public async Task<List<NewsManageDTO>> SearchNewsAsync(string keyword)
        {
            var newsList = await _context.News
                .Where(n => n.Title.Contains(keyword) || n.Tags.Contains(keyword) || n.Category.CategoryName.Contains(keyword))
                .Include(n => n.Author)
                .Include(n => n.Category)
                .ToListAsync();

            return _mapper.Map<List<NewsManageDTO>>(newsList);
        }
    }
}
