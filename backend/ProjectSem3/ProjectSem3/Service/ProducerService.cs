using AutoMapper;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;

public class ProducerService
{
    private readonly OnlineDvdsContext _context;
    private readonly IMapper _mapper;

    public ProducerService(OnlineDvdsContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    // Lấy tất cả các nhà sản xuất
    public IEnumerable<ProducerDto> GetAllProducers()
    {
        var producers = _context.Producers.ToList();
        return producers.Select(producer => _mapper.Map<ProducerDto>(producer));
    }

    // Lấy nhà sản xuất theo ID
    public ProducerDto GetProducerById(int id)
    {
        var producer = _context.Producers.FirstOrDefault(p => p.ProducerId == id);
        return producer != null ? _mapper.Map<ProducerDto>(producer) : null;
    }

    // Thêm mới một nhà sản xuất
    public ProducerDto AddProducer(AddProducerDto addProducerDto)
    {
        var producer = new Producer
        {
            Name = addProducerDto.Name,
            ContactInfo = addProducerDto.ContactInfo,
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };

        _context.Producers.Add(producer);
        _context.SaveChanges();

        return _mapper.Map<ProducerDto>(producer);
    }

    // Cập nhật thông tin nhà sản xuất
    public ProducerDto UpdateProducer(int id, UpdateProducerDto updateProducerDto)
    {
        var producer = _context.Producers.FirstOrDefault(p => p.ProducerId == id);
        if (producer == null)
        {
            throw new Exception("Producer not found.");
        }

        producer.Name = updateProducerDto.Name ?? producer.Name;
        producer.ContactInfo = updateProducerDto.ContactInfo ?? producer.ContactInfo;
        producer.UpdatedAt = DateTime.UtcNow;

        _context.SaveChanges();

        return _mapper.Map<ProducerDto>(producer);
    }

    // Xóa nhà sản xuất
    public async Task<bool> DeleteProducer(int id)
    {
        var producer = await _context.Producers.FindAsync(id);
        if (producer != null)
        {
            _context.Producers.Remove(producer);
            await _context.SaveChangesAsync();
            return true;
        }

        return false;
    }

    // Tìm kiếm nhà sản xuất theo tên hoặc thông tin liên hệ
    public IEnumerable<ProducerDto> SearchProducers(string keyword)
    {
        var producers = _context.Producers
            .Where(p => p.Name.Contains(keyword) || p.ContactInfo.Contains(keyword))
            .ToList();

        return producers.Select(producer => _mapper.Map<ProducerDto>(producer));
    }
}
