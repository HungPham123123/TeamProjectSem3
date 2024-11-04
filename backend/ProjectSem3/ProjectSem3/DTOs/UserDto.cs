namespace ProjectSem3.DTOs
{
    public class UserDto
    {
        public int UserId { get; set; }
        public string? Username { get; set; }
        public string? Email { get; set; }
        public bool? Enabled { get; set; }

        public string Token { get; set; }

        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
