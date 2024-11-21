using AutoMapper;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using Microsoft.EntityFrameworkCore;


public class NewsService
{
    private readonly OnlineDvdsContext _context;
    private readonly IMapper _mapper;

    public NewsService(OnlineDvdsContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // Lấy tất cả tin tức
    public IEnumerable<NewsDto> GetAllNews()
    {
        var news = _context.News.Include(n => n.Category).Include(n => n.Author).ToList();
        return news.Select(n => _mapper.Map<NewsDto>(n));
    }

    // Lấy tin tức theo ID
    public NewsDto GetNewsById(int id)
    {
        var news = _context.News.Include(n => n.Category).Include(n => n.Author)
            .FirstOrDefault(n => n.NewsId == id);

        return news != null ? _mapper.Map<NewsDto>(news) : null;
    }

    // Thêm mới tin tức
    public NewsDto AddNews(AddNewsDto addNewsDto)
    {
        var news = new News
        {
            Title = addNewsDto.Title,
            Content = addNewsDto.Content,
            //CategoryId = addNewsDto.CategoryId,
            ImageUrl = addNewsDto.ImageUrl,
            Tags = addNewsDto.Tags,
            Summary = addNewsDto.Summary,
            PublishedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.News.Add(news);
        _context.SaveChanges();

        return _mapper.Map<NewsDto>(news);
    }

    // Cập nhật tin tức
    public NewsDto UpdateNews(int id, UpdateNewsDto updateNewsDto)
    {
        var news = _context.News.FirstOrDefault(n => n.NewsId == id);
        if (news == null)
        {
            throw new Exception("News not found.");
        }

        // Cập nhật các thuộc tính với điều kiện nếu giá trị mới không null
        news.Title = updateNewsDto.Title ?? news.Title;
        news.Content = updateNewsDto.Content ?? news.Content;

        // Kiểm tra nếu CategoryId có giá trị và gán vào news
        //if (updateNewsDto.CategoryId.HasValue){news.CategoryId = updateNewsDto.CategoryId.Value;}

        news.ImageUrl = updateNewsDto.ImageUrl ?? news.ImageUrl;
        news.Tags = updateNewsDto.Tags ?? news.Tags;
        news.Summary = updateNewsDto.Summary ?? news.Summary;
        news.UpdatedAt = DateTime.UtcNow;

        _context.SaveChanges();

        return _mapper.Map<NewsDto>(news);
    }


    // Xóa tin tức
    public async Task<bool> DeleteNews(int id)
    {
        var news = await _context.News.FindAsync(id);
        if (news != null)
        {
            _context.News.Remove(news);
            await _context.SaveChangesAsync();
            return true;
        }

        return false;
    }

    // Tìm kiếm tin tức theo tiêu đề hoặc nội dung
    public IEnumerable<NewsDto> SearchNews(string keyword)
    {
        var news = _context.News
            .Where(n => n.Title.Contains(keyword) || n.Content.Contains(keyword))
            .Include(n => n.Category)
            .Include(n => n.Author)
            .ToList();

        return news.Select(n => _mapper.Map<NewsDto>(n));
    }

}
