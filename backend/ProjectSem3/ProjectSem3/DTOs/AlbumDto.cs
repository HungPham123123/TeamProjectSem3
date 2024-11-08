
namespace ProjectSem3.DTOs
{
    public class AlbumDto
    {
        public int AlbumId { get; set; }
        public string? Title { get; set; }
        public string? Biography { get; set; }
        public DateTime? ReleaseDate { get; set; }

        public ICollection<SongDTO> Songs { get; set; }
    }
}
