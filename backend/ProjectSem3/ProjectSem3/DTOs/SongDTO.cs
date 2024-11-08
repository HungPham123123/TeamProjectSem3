namespace ProjectSem3.DTOs
{
    public class SongDTO
    {
        public int SongId { get; set; }
        public int? AlbumId { get; set; }
        public int? ArtistId { get; set; }
        public string? Title { get; set; }
        public string? Image { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public string? Link { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        public ICollection<ArtistDTO> Artists { get; set; }
    }

}
