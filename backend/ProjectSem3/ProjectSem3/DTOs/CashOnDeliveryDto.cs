namespace ProjectSem3.DTOs
{
    public class CashOnDeliveryDto
    {
        public int UserId { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Country { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;
        public string Optional { get; set; } = string.Empty;
        public string ZipCode { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public double Tax { get; set; }
        public decimal TotalAmount { get; set; }


        public List<CartItemDto> CartItems { get; set; } = new List<CartItemDto>();
    }
}
