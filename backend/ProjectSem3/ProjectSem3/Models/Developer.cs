using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Developer
{
    public int DeveloperId { get; set; }

    public string? Name { get; set; }

    public string? ContactInfo { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<Game> Games { get; set; } = new List<Game>();
}
