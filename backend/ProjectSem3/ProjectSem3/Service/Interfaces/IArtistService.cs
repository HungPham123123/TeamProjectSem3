using ProjectSem3.DTOs;

namespace ProjectSem3.Service.Interfaces
{
    public interface IArtistService
    {
        Task<IEnumerable<ArtistDTO>> GetAllArtistsAsync();
        Task<ArtistDTO?> GetArtistByIdAsync(int artistId);
        Task<ArtistDTO?> AddArtistAsync(ArtistDTO artistDto);
        Task<bool> UpdateArtistAsync(int artistId, ArtistDTO artistDto);
        Task<bool> DeleteArtistAsync(int artistId);
        Task<IEnumerable<ArtistDTO>> SearchArtistsAsync(string searchTerm);
    }
}
