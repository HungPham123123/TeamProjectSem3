using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class WarehouseStock
{
    public int WarehouseStockId { get; set; }

    public int? ProductId { get; set; }

    public int? StockQuantity { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual Product? Product { get; set; }
}
