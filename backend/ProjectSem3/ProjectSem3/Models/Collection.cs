using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Collection
{
    public int CollectionId { get; set; }

    public int? UserId { get; set; }

    public string? Title { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<CollectionItem> CollectionItems { get; set; } = new List<CollectionItem>();

    public virtual User? User { get; set; }
}
