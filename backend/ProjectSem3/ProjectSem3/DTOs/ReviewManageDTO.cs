namespace ProjectSem3.DTOs
{
    public class ReviewManageDTO
    {
        public int ReviewId { get; set; }
        public int? UserId { get; set; }
        public int? ProductId { get; set; }
        public decimal? Rating { get; set; }
        public string? Comment { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string? Username { get; set; }
        public string? ProductTitle { get; set; }
    }
}
