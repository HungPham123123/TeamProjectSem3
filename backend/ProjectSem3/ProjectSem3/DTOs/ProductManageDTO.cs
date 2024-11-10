namespace ProjectSem3.DTOs
{
    public class ProductManageDTO
    {
        public int ProductId { get; set; }
        public string? Title { get; set; }
        public int? CategoryId { get; set; }
        public decimal? Price { get; set; }
        public decimal? Rating { get; set; }
        public string? Status { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public string? Image1 { get; set; }
        public string? ProductType { get; set; }
        public int? StockQuantity { get; set; }
        public string? CategoryName { get; set; } // Thông tin Category

        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
