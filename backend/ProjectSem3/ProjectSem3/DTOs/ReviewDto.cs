namespace ProjectSem3.DTOs
{
    public class ReviewDto
    {
        public int? UserId { get; set; }
        public string? Username { get; set; }  // Assuming the User has a Name or Username
        public int? ProductId { get; set; }
        public decimal? Rating { get; set; }
        public string? Comment { get; set; }
        public DateTime? CreatedAt { get; set; }
    }
}
