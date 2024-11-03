using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Org.BouncyCastle.Crypto;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Service
{
    public class ArtistService : IArtistService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;
        public ArtistService(OnlineDvdsContext context, IMapper mapper) { 
            _context = context;
            _mapper = mapper;
        }

        public async Task<IEnumerable<ArtistDTO>> GetAllArtistsAsync()
        {
            var artists = await _context.Artists.ToListAsync();
            return _mapper.Map<IEnumerable<ArtistDTO>>(artists);
        }

        public async Task<ArtistDTO?> GetArtistByIdAsync(int artistId)
        {
            var artist = await _context.Artists.FindAsync(artistId);
            return artist != null ? _mapper.Map<ArtistDTO>(artist) : null;
        }

        public async Task<ArtistDTO?> AddArtistAsync(ArtistDTO artistDto)
        {
            var artist = _mapper.Map<Artist>(artistDto);
            _context.Artists.Add(artist);
            await _context.SaveChangesAsync();
            return _mapper.Map<ArtistDTO>(artist);
        }

        public async Task<bool> UpdateArtistAsync(int artistId, ArtistDTO artistDto)
        {
            var artist = await _context.Artists.FindAsync(artistId);
            if (artist == null) return false;

            _mapper.Map(artistDto, artist);
            _context.Artists.Update(artist);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<bool> DeleteArtistAsync(int artistId)
        {
            var artist = await _context.Artists.FindAsync(artistId);
            if (artist == null) return false;

            _context.Artists.Remove(artist);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<ArtistDTO>> SearchArtistsAsync(string searchTerm)
        {
            // Kiểm tra nếu searchTerm rỗng hoặc null
            if (string.IsNullOrWhiteSpace(searchTerm))
            {
                return Enumerable.Empty<ArtistDTO>();
            }

            // Tìm kiếm nghệ sĩ dựa trên tên hoặc tiểu sử
            var artists = await _context.Artists
                .Where(a => a.Name.Contains(searchTerm) || a.Biography.Contains(searchTerm))
                .ToListAsync();

            // Sử dụng mapper để chuyển đổi danh sách nghệ sĩ sang danh sách ArtistDTO
            return _mapper.Map<IEnumerable<ArtistDTO>>(artists);
        }

    }
}
