﻿using System;
using System.Collections.Generic;

namespace ProjectSem3.Models;

public partial class MovieActor
{
    public int MovieActorId { get; set; }

    public int? MovieId { get; set; }

    public int? ActorId { get; set; }

    public virtual Actor? Actor { get; set; }

    public virtual Movie? Movie { get; set; }
}
