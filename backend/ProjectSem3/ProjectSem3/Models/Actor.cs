using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Actor
{
    public int ActorId { get; set; }

    public string? Name { get; set; }

    public string? Biography { get; set; }

    public string? Social { get; set; }

    public string? Height { get; set; }

    public string? Born { get; set; }

    public string? Children { get; set; }

    public string? Parents { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual ICollection<MovieActor> MovieActors { get; set; } = new List<MovieActor>();
}
