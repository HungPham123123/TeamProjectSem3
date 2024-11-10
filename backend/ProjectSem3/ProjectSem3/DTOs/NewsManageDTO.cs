namespace ProjectSem3.DTOs
{
    public class NewsManageDTO
    {
        public int NewsId { get; set; }
        public string? Title { get; set; }
        public string? Content { get; set; }
        public int? CategoryId { get; set; }
        public DateTime? PublishedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public int? AuthorId { get; set; }
        public string? ImageUrl { get; set; }
        public int? Views { get; set; }
        public string? Tags { get; set; }
        public string? Summary { get; set; }
        public string? AuthorName { get; set; }
        public string? CategoryName { get; set; }
    }
}
