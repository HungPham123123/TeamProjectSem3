using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Product
{
    public int ProductId { get; set; }

    public string? Title { get; set; }

    public int? CategoryId { get; set; }

    public decimal? Price { get; set; }

    public decimal? Rating { get; set; }

    public string? StockStatus { get; set; }

    public DateTime? ReleaseDate { get; set; }

    public string? ProductType { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public int? StockQuantity { get; set; }

    public virtual ICollection<Album> Albums { get; set; } = new List<Album>();

    public virtual ICollection<CartItem> CartItems { get; set; } = new List<CartItem>();

    public virtual Category? Category { get; set; }

    public virtual ICollection<CollectionItem> CollectionItems { get; set; } = new List<CollectionItem>();

    public virtual ICollection<Game> Games { get; set; } = new List<Game>();

    public virtual ICollection<Movie> Movies { get; set; } = new List<Movie>();

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual ICollection<Promotion> Promotions { get; set; } = new List<Promotion>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();

    public virtual ICollection<WarehouseStock> WarehouseStocks { get; set; } = new List<WarehouseStock>();
}
