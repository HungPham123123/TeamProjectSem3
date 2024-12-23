﻿using System;

namespace ProjectSem3.DTOs
{
    public class OrderUpdateDTO
    {
        public int OrderId { get; set; } 
        public string? Address { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Status { get; set; } 
        public DateTime? UpdatedAt { get; set; } = DateTime.Now;
    }
}
