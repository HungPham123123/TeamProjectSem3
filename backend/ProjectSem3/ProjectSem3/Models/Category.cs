using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Category
{
    public int CategoryId { get; set; }

    public string CategoryName { get; set; } = string.Empty;

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<News> News { get; set; } = new List<News>();

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
