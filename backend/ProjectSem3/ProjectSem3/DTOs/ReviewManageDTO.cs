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
        public string? ProductTitle { get; set; } // Include Product Name
        public string? Username { get; set; }   // Include User Name
    }
    public class AddReviewDTO
    {
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public decimal Rating { get; set; }
        public string? Comment { get; set; }
    }
    public class UpdateReviewDto
    {
        public decimal? Rating { get; set; }
        public string? Comment { get; set; }
    }

}
