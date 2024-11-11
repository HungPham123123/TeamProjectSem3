namespace ProjectSem3.DTOs
{
    public class UpdateUserDTO
    {
        // Không bao gồm Username vì Username không thể thay đổi
        public string? Email { get; set; }
        public bool? Enabled { get; set; }
        public string Role { get; set; }
    }
}
