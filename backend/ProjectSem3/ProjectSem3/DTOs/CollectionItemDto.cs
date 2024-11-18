namespace ProjectSem3.DTOs
{
    public class CollectionItemDto
    {
        public int CollectionItemId { get; set; }
        public int ProductId { get; set; }
        public string Title { get; set; }
        public decimal Price { get; set; }
        public decimal? Rating { get; set; }
        public string Status { get; set; }
        public DateTime? ReleaseDate { get; set; }
        public string Image1 { get; set; }
        public string Image2 { get; set; }
        public string Image3 { get; set; }
        public string Image4 { get; set; }
    }
}
