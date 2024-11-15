namespace ProjectSem3.DTOs
{
    public class MovieDTO
    {
        public int MovieId { get; set; }
        public int? DirectorId { get; set; }
        public int? ProducerId { get; set; }
        public string? Biography { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
