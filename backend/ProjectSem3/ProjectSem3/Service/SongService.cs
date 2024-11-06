using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;


namespace ProjectSem3.Service
{
    public class SongService : IGMService<SongDTO>
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public SongService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<SongDTO>> GetAllAsync()
        {
            var songs = await _context.Songs.ToListAsync();
            return _mapper.Map<List<SongDTO>>(songs);
        }
        public async Task<SongDTO?> GetByIdAsync(int id)
        {
            var song = await _context.Songs.FindAsync(id);
            if (song == null) throw new KeyNotFoundException("Not Found Song");

            return _mapper.Map<SongDTO>(song);

        }
        // Thêm bài hát mới
        public async Task AddAsync(SongDTO songDto)
        {
            var song = _mapper.Map<Song>(songDto);
            song.CreatedAt = DateTime.UtcNow; // Gán thời gian hiện tại
            song.UpdatedAt = DateTime.UtcNow; // Gán thời gian hiện tại cho UpdatedAt
            _context.Songs.Add(song);
            await _context.SaveChangesAsync();
        }

        // Cập nhật bài hát
        public async Task UpdateAsync(SongDTO songDto)
        {
            var song = await _context.Songs.FindAsync(songDto.SongId);
            if (song == null) throw new KeyNotFoundException("Song not found");

            _mapper.Map(songDto, song); // Ánh xạ các thuộc tính từ songDto vào song
            song.UpdatedAt = DateTime.UtcNow; // Cập nhật thời gian hiện tại cho UpdatedAt
            await _context.SaveChangesAsync();
        }

        // Xóa bài hát
        public async Task DeleteAsync(int id)
        {
            var song = await _context.Songs.FindAsync(id);
            if (song == null) throw new KeyNotFoundException("Song not found");

            _context.Songs.Remove(song);
            await _context.SaveChangesAsync();
        }

        // Tìm kiếm bài hát
        public async Task<List<SongDTO>> SearchAsync(string keyword)
        {
            var songs = await _context.Songs
                .Where(s => s.Title.Contains(keyword) || s.SongId.ToString() == keyword)
                .ToListAsync();

            return _mapper.Map<List<SongDTO>>(songs);
        }

    }
}
