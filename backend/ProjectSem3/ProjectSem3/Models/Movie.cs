using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Movie
{
    public int MovieId { get; set; }

    public int? ProductId { get; set; }

    public int? DirectorId { get; set; }

    public int? ProducerId { get; set; }

    public string? Link { get; set; }

    public string? Biography { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual Director? Director { get; set; }

    public virtual ICollection<MovieActor> MovieActors { get; set; } = new List<MovieActor>();

    public virtual Producer? Producer { get; set; }

    public virtual Product? Product { get; set; }
}
