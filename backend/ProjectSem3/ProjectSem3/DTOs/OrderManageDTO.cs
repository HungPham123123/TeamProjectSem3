namespace ProjectSem3.DTOs
{
    public class OrderManageDTO
    {
        public int OrderId { get; set; }
        public int? UserId { get; set; }
        public int? PaymentId { get; set; }
        public string? Address { get; set; }
        public string? Optional { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public decimal? TotalAmount { get; set; }
        public string? Status { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string? UserName { get; set; } // Để hiển thị tên người dùng
    }
}
