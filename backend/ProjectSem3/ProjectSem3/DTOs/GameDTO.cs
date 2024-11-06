namespace ProjectSem3.DTOs
{
    public class GameDTO
    {
        public int GameId { get; set; }
        public int? DeveloperId { get; set; }
        public int? PublisherId { get; set; }
        public string? Biography { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }

}
