using System;
using System.Collections.Generic;

namespace ProjectSem3.DTOs
{
    public class OrderResponseDTO
    {
        public int OrderId { get; set; }
        public int? UserId { get; set; }
        public int? PaymentId { get; set; }
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Country { get; set; }
        public string? City { get; set; }
        public string? Address { get; set; }
        public string? Optional { get; set; }
        public string? ZipCode { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public double? Tax { get; set; }
        public decimal? TotalAmount { get; set; }
        public string? Status { get; set; }
        public DateTime? CreatedAt { get; set; }
        public DateTime? UpdatedAt { get; set; }

        // Danh sách OrderItems chi tiết
        public List<OrderItemDTO> OrderItems { get; set; } = new List<OrderItemDTO>();

        // Thêm thông tin người dùng và phương thức thanh toán
        public string? UserName { get; set; }
        public string? PaymentMethod { get; set; }
    }

    public class OrderItemDTO
    {
        public int OrderItemId { get; set; }
        public int ProductId { get; set; }
        public string Title { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
    }
}
