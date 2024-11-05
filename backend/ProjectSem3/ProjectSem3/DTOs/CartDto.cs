namespace ProjectSem3.DTOs
{
    public class CartDto
    {
        public int CartId { get; set; }
        public int? UserId { get; set; }
        public List<CartItemDto> CartItems { get; set; } = new List<CartItemDto>();
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }
    }
}
