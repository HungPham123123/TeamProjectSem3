namespace ProjectSem3.DTOs
{
    public class ProductAlbumFilterDto
    {
        public int ProductId { get; set; }
        public string? Title { get; set; }
        public int? CategoryId { get; set; }
        public string CategoryName { get; set; }
        public decimal? Price { get; set; }
        public decimal? Rating { get; set; }
        public string? Status { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public string? Image1 { get; set; }
        public string? Image2 { get; set; }
        public string? Image3 { get; set; }
        public string? Image4 { get; set; }
        public int? StockQuantity { get; set; }

        // Relationships
        public ICollection<AlbumDto> Albums { get; set; } = new List<AlbumDto>();
    }
}
