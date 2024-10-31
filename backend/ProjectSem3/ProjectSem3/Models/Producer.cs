using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Producer
{
    public int ProducerId { get; set; }

    public string? Name { get; set; }

    public string? ContactInfo { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<Movie> Movies { get; set; } = new List<Movie>();
}
