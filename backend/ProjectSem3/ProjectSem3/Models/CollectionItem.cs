using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class CollectionItem
{
    public int CollectionItemId { get; set; }

    public int? CollectionId { get; set; }

    public int? ProductId { get; set; }

    public virtual Collection? Collection { get; set; }

    public virtual Product? Product { get; set; }
}
