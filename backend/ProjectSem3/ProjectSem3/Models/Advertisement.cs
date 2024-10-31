using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Advertisement
{
    public int AdvertisementId { get; set; }

    public string? Title { get; set; }

    public string? ImageUrl { get; set; }

    public string? Position { get; set; }

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }
}
