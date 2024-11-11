namespace ProjectSem3.DTOs;
using System.Collections.Generic;


public class OrderResponseDTO
{
    public int OrderId { get; set; }
    public string? UserName { get; set; } 
    public string? PaymentMethod { get; set; } 
    public string? Address { get; set; } 
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public double? Tax { get; set; }
    public decimal? TotalAmount { get; set; }
    public string? Status { get; set; }
    public DateTime? CreatedAt { get; set; }

    // Danh sách OrderItems chi tiết
    public List<OrderItemDTO> OrderItems { get; set; } = new List<OrderItemDTO>();
}

public class OrderItemDTO
{
    public int OrderItemId { get; set; }
    public int ProductId { get; set; }
    public string Title { get; set; }
    public int Quantity { get; set; }
    public decimal UnitPrice { get; set; }
}
