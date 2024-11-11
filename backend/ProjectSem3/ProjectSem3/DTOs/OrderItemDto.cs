namespace ProjectSem3.DTOs
{
    public class OrderItemDto
    {
        public int ProductId { get; set; }
        public string ProductTitle { get; set; } = string.Empty;
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public string ProductImage { get; set; } = string.Empty;
    }
}
