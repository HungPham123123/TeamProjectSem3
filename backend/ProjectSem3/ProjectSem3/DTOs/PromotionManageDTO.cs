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
    public class PromotionCreateDTO
    {
        public int? ProductId { get; set; } // ID của sản phẩm được áp dụng khuyến mãi
        public decimal? DiscountPercentage { get; set; } // Phần trăm giảm giá
        public DateTime? StartDate { get; set; } // Ngày bắt đầu
        public DateTime? EndDate { get; set; } // Ngày kết thúc
    }
}
