using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Promotion
{
    public int PromotionId { get; set; }

    public int? ProductId { get; set; }

    public decimal? DiscountPercentage { get; set; }

    public DateTime? StartDate { get; set; }

    public DateTime? EndDate { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual Product? Product { get; set; }
}
