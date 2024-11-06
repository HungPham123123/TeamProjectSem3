using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Song
{
    public Song()
    {
        CreatedAt = DateTime.Now;
        UpdatedAt = DateTime.Now;
    }
    public int SongId { get; set; }

    public int? AlbumId { get; set; }

    public int? ArtistId { get; set; }

    public string? Title { get; set; }

    public string? Image { get; set; }

    public DateTime? ReleaseDate { get; set; }

    public string? Link { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public virtual Album? Album { get; set; }

    public virtual Artist? Artist { get; set; }
}
