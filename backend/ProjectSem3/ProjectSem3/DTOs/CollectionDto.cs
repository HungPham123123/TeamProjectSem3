namespace ProjectSem3.DTOs
{
    public class CollectionDto
    {
        public int CollectionId { get; set; }
        public string Title { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
        public List<CollectionItemDto> CollectionItems { get; set; } = new List<CollectionItemDto>();
    }
}
