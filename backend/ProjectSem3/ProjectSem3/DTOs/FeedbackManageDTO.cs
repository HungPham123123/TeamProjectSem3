namespace ProjectSem3.DTOs
{
    public class FeedbackManageDTO
    {
        public int FeedbackId { get; set; }
        public int? UserId { get; set; }
        public string? FeedbackText { get; set; }
        public string? AdminReply { get; set; }
        public DateTime? CreatedAt { get; set; }
        public string? Username { get; set; } // Thêm thông tin người dùng
    }
}
