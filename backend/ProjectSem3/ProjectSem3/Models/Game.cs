using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Game
{
    public int GameId { get; set; }

    public int? ProductId { get; set; }

    public int? DeveloperId { get; set; }

    public int? PublisherId { get; set; }

    public string? Biography { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual Developer? Developer { get; set; }

    public virtual Product? Product { get; set; }

    public virtual Publisher? Publisher { get; set; }
}
