using AutoMapper;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;

public class PublisherService
{
    private readonly OnlineDvdsContext _context;
    private readonly IMapper _mapper;

    public PublisherService(OnlineDvdsContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // Lấy tất cả các nhà xuất bản
    public IEnumerable<PublisherDto> GetAllPublishers()
    {
        var publishers = _context.Publishers.ToList();
        return publishers.Select(publisher => _mapper.Map<PublisherDto>(publisher));
    }

    // Lấy nhà xuất bản theo ID
    public PublisherDto GetPublisherById(int id)
    {
        var publisher = _context.Publishers.FirstOrDefault(p => p.PublisherId == id);
        return _mapper.Map<PublisherDto>(publisher);
    }

    // Thêm mới một nhà xuất bản
    public PublisherDto AddPublisher(AddPublisherDto addPublisherDto)
    {
        var publisher = new Publisher
        {
            Name = addPublisherDto.Name,
            ContactInfo = addPublisherDto.ContactInfo,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Publishers.Add(publisher);
        _context.SaveChanges();

        return _mapper.Map<PublisherDto>(publisher);
    }

    // Cập nhật thông tin nhà xuất bản
    public PublisherDto UpdatePublisher(int id, UpdatePublisherDto updatePublisherDto)
    {
        var publisher = _context.Publishers.FirstOrDefault(p => p.PublisherId == id);
        if (publisher == null)
        {
            throw new Exception("Publisher not found.");
        }

        publisher.Name = updatePublisherDto.Name ?? publisher.Name;
        publisher.ContactInfo = updatePublisherDto.ContactInfo ?? publisher.ContactInfo;
        publisher.UpdatedAt = DateTime.UtcNow;

        _context.SaveChanges();

        return _mapper.Map<PublisherDto>(publisher);
    }

    // Xóa nhà xuất bản
    public async Task<bool> DeletePublisher(int id)
    {
        var publisher = await _context.Publishers.FindAsync(id);
        if (publisher != null)
        {
            _context.Publishers.Remove(publisher);
            await _context.SaveChangesAsync();
            return true;
        }

        return false;
    }

    // Tìm kiếm nhà xuất bản theo tên hoặc thông tin liên hệ
    public IEnumerable<PublisherDto> SearchPublishers(string keyword)
    {
        var publishers = _context.Publishers
            .Where(p => p.Name.Contains(keyword) || p.ContactInfo.Contains(keyword))
            .ToList();

        return publishers.Select(publisher => _mapper.Map<PublisherDto>(publisher));
    }
}
