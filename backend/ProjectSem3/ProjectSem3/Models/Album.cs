using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Album
{
    public int AlbumId { get; set; }

    public int? ProductId { get; set; }

    public int? ArtistId { get; set; }

    public string? Title { get; set; }

    public DateTime? ReleaseDate { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual Artist? Artist { get; set; }

    public virtual Product? Product { get; set; }

    public virtual ICollection<Song> Songs { get; set; } = new List<Song>();
}
