using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class Feedback
{
    public int FeedbackId { get; set; }

    public int? UserId { get; set; }

    public string? FeedbackText { get; set; }

    public string? AdminReply { get; set; }

    public DateTime? CreatedAt { get; set; }

    public virtual User? User { get; set; }
}
