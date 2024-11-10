namespace ProjectSem3.DTOs
{
    public class PromotionManageDTO
    {
        public int PromotionId { get; set; }
        public int? ProductId { get; set; }
        public decimal? DiscountPercentage { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public string? ProductTitle { get; set; } // Để hiển thị tên sản phẩm
    }
}
