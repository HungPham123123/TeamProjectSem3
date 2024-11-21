namespace ProjectSem3.DTOs
{
    public class AddAlbumDto
    {
        public string? Title { get; set; }
        public string? Biography { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public List<string> SongTitles { get; set; } = new List<string>();  // Danh sách tên bài hát
    }
}
