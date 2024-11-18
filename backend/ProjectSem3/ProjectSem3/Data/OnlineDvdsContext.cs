using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Models;

namespace ProjectSem3.Data;

public partial class OnlineDvdsContext : DbContext
{
    public OnlineDvdsContext()
    {
    }

    public OnlineDvdsContext(DbContextOptions<OnlineDvdsContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Actor> Actors { get; set; }

    public virtual DbSet<Advertisement> Advertisements { get; set; }

    public virtual DbSet<Album> Albums { get; set; }

    public virtual DbSet<Artist> Artists { get; set; }

    public virtual DbSet<Cart> Carts { get; set; }

    public virtual DbSet<CartItem> CartItems { get; set; }

    public virtual DbSet<Category> Categories { get; set; }

    public virtual DbSet<Collection> Collections { get; set; }

    public virtual DbSet<CollectionItem> CollectionItems { get; set; }

    public virtual DbSet<Developer> Developers { get; set; }

    public virtual DbSet<Director> Directors { get; set; }

    public virtual DbSet<Feedback> Feedbacks { get; set; }

    public virtual DbSet<Game> Games { get; set; }

    public virtual DbSet<Movie> Movies { get; set; }

    public virtual DbSet<MovieActor> MovieActors { get; set; }

    public virtual DbSet<News> News { get; set; }

    public virtual DbSet<Order> Orders { get; set; }

    public virtual DbSet<OrderItem> OrderItems { get; set; }

    public virtual DbSet<Payment> Payments { get; set; }

    public virtual DbSet<Producer> Producers { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    public virtual DbSet<Promotion> Promotions { get; set; }

    public virtual DbSet<Publisher> Publishers { get; set; }

    public virtual DbSet<Review> Reviews { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Song> Songs { get; set; }

    public virtual DbSet<User> Users { get; set; }

    public virtual DbSet<UserRole> UserRoles { get; set; }
    public virtual DbSet<SongArtist> SongArtists { get; set; }



    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Actor>(entity =>
        {
            entity.HasKey(e => e.ActorId).HasName("PK__Actors__57B3EA2BD0342B0E");

            entity.Property(e => e.ActorId).HasColumnName("ActorID");
            entity.Property(e => e.Biography).HasColumnType("nvarchar(500)");
            entity.Property(e => e.Born).HasMaxLength(500);
            entity.Property(e => e.Children).HasMaxLength(500);
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Height).HasMaxLength(500);
            entity.Property(e => e.Name).HasMaxLength(500);
            entity.Property(e => e.Parents).HasMaxLength(500);
            entity.Property(e => e.Social).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Advertisement>(entity =>
        {
            entity.HasKey(e => e.AdvertisementId).HasName("PK__Advertis__C4C7F42DECFF1ECD");

            entity.Property(e => e.AdvertisementId).HasColumnName("AdvertisementID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.ImageUrl).HasMaxLength(500);
            entity.Property(e => e.Position).HasMaxLength(500);
            entity.Property(e => e.Title).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Album>(entity =>
        {
            entity.HasKey(e => e.AlbumId).HasName("PK__Albums__97B4BE1786BCC95C");

            entity.Property(e => e.AlbumId).HasColumnName("AlbumID");
            entity.Property(e => e.Biography).HasColumnType("nvarchar(500)");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.ReleaseDate).HasColumnType("date");
            entity.Property(e => e.Title).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");

            entity.HasOne(d => d.Product).WithMany(p => p.Albums)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__Albums__ProductI__4B973090");
        });

        modelBuilder.Entity<Artist>(entity =>
        {
            entity.HasKey(e => e.ArtistId).HasName("PK__Artists__25706B70739603B0");

            entity.Property(e => e.ArtistId).HasColumnName("ArtistID");
            entity.Property(e => e.Biography).HasColumnType("nvarchar(500)");
            entity.Property(e => e.Born).HasMaxLength(500);
            entity.Property(e => e.Children).HasMaxLength(500);
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Height).HasMaxLength(500);
            entity.Property(e => e.Name).HasMaxLength(500);
            entity.Property(e => e.Parents).HasMaxLength(500);
            entity.Property(e => e.Social).HasMaxLength(500);
            entity.Property(e => e.Image).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Cart>(entity =>
        {
            entity.HasKey(e => e.CartId).HasName("PK__Cart__51BCD797CC69578F");

            entity.ToTable("Cart");

            entity.Property(e => e.CartId).HasColumnName("CartID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.User).WithMany(p => p.Carts)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Cart__UserID__636EBA21");
        });

        modelBuilder.Entity<CartItem>(entity =>
        {
            entity.HasKey(e => e.CartItemId).HasName("PK__CartItem__488B0B2A665D81A9");

            entity.Property(e => e.CartItemId).HasColumnName("CartItemID");
            entity.Property(e => e.CartId).HasColumnName("CartID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");

            entity.HasOne(d => d.Cart).WithMany(p => p.CartItems)
                .HasForeignKey(d => d.CartId)
                .HasConstraintName("FK__CartItems__CartI__6462DE5A");

            entity.HasOne(d => d.Product).WithMany(p => p.CartItems)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__CartItems__Produ__65570293");
        });

        modelBuilder.Entity<Category>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("PK__Categori__19093A2BFD083726");

            entity.Property(e => e.CategoryId).HasColumnName("CategoryID");
            entity.Property(e => e.CategoryName).HasMaxLength(500);
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Collection>(entity =>
        {
            entity.HasKey(e => e.CollectionId).HasName("PK__Collecti__7DE6BC24E535CE4F");

            entity.Property(e => e.CollectionId).HasColumnName("CollectionID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Title).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.User).WithMany(p => p.Collections)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Collectio__UserI__5DB5E0CB");
        });

        modelBuilder.Entity<CollectionItem>(entity =>
        {
            entity.HasKey(e => e.CollectionItemId).HasName("PK__Collecti__638E14C976F182D4");

            entity.Property(e => e.CollectionItemId).HasColumnName("CollectionItemID");
            entity.Property(e => e.CollectionId).HasColumnName("CollectionID");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");

            entity.HasOne(d => d.Collection).WithMany(p => p.CollectionItems)
                .HasForeignKey(d => d.CollectionId)
                .HasConstraintName("FK__Collectio__Colle__5EAA0504");

            entity.HasOne(d => d.Product).WithMany(p => p.CollectionItems)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__Collectio__Produ__5F9E293D");
        });

        modelBuilder.Entity<Developer>(entity =>
        {
            entity.HasKey(e => e.DeveloperId).HasName("PK__Develope__DE084CD1FB825E5A");

            entity.Property(e => e.DeveloperId).HasColumnName("DeveloperID");
            entity.Property(e => e.ContactInfo).HasColumnType("nvarchar(500)");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Director>(entity =>
        {
            entity.HasKey(e => e.DirectorId).HasName("PK__Director__26C69E26EFEC56D7");

            entity.Property(e => e.DirectorId).HasColumnName("DirectorID");
            entity.Property(e => e.Biography).HasColumnType("nvarchar(500)");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Feedback>(entity =>
        {
            entity.HasKey(e => e.FeedbackId).HasName("PK__Feedback__6A4BEDF6B93561A7");

            entity.ToTable("Feedback");

            entity.Property(e => e.FeedbackId).HasColumnName("FeedbackID");
            entity.Property(e => e.AdminReply).HasColumnType("nvarchar(500)");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.FeedbackText).HasColumnType("nvarchar(500)");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.User).WithMany(p => p.Feedbacks)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Feedback__UserID__5BCD9859");
        });

        modelBuilder.Entity<Game>(entity =>
        {
            entity.HasKey(e => e.GameId).HasName("PK__Games__2AB897DD674A4E2D");

            entity.Property(e => e.GameId).HasColumnName("GameID");
            entity.Property(e => e.Biography).HasColumnType("nvarchar(500)");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.DeveloperId).HasColumnName("DeveloperID");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.PublisherId).HasColumnName("PublisherID");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");

            entity.HasOne(d => d.Developer).WithMany(p => p.Games)
                .HasForeignKey(d => d.DeveloperId)
                .HasConstraintName("FK__Games__Developer__542C7691");

            entity.HasOne(d => d.Product).WithMany(p => p.Games)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__Games__ProductID__53385258");

            entity.HasOne(d => d.Publisher).WithMany(p => p.Games)
                .HasForeignKey(d => d.PublisherId)
                .HasConstraintName("FK__Games__Publisher__55209ACA");
        });

        modelBuilder.Entity<Movie>(entity =>
        {
            entity.HasKey(e => e.MovieId).HasName("PK__Movies__4BD2943A791CEFC7");

            entity.Property(e => e.MovieId).HasColumnName("MovieID");
            entity.Property(e => e.Biography).HasColumnType("nvarchar(500)");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.DirectorId).HasColumnName("DirectorID");
            entity.Property(e => e.Link).HasMaxLength(500);
            entity.Property(e => e.ProducerId).HasColumnName("ProducerID");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");

            entity.HasOne(d => d.Director).WithMany(p => p.Movies)
                .HasForeignKey(d => d.DirectorId)
                .HasConstraintName("FK__Movies__Director__4F67C174");

            entity.HasOne(d => d.Producer).WithMany(p => p.Movies)
                .HasForeignKey(d => d.ProducerId)
                .HasConstraintName("FK__Movies__Producer__505BE5AD");

            entity.HasOne(d => d.Product).WithMany(p => p.Movies)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__Movies__ProductI__4E739D3B");
        });

        modelBuilder.Entity<MovieActor>(entity =>
        {
            entity.HasKey(e => e.MovieActorId).HasName("PK__MovieAct__0F76A5835A5E8D8F");

            entity.Property(e => e.MovieActorId).HasColumnName("MovieActorID");
            entity.Property(e => e.ActorId).HasColumnName("ActorID");
            entity.Property(e => e.MovieId).HasColumnName("MovieID");

            entity.HasOne(d => d.Actor).WithMany(p => p.MovieActors)
                .HasForeignKey(d => d.ActorId)
                .HasConstraintName("FK__MovieActo__Actor__52442E1F");

            entity.HasOne(d => d.Movie).WithMany(p => p.MovieActors)
                .HasForeignKey(d => d.MovieId)
                .HasConstraintName("FK__MovieActo__Movie__515009E6");
        });

        modelBuilder.Entity<News>(entity =>
        {
            entity.HasKey(e => e.NewsId).HasName("PK__News__954EBDD3E42ED9CE");

            entity.Property(e => e.NewsId).HasColumnName("NewsID");
            entity.Property(e => e.AuthorId).HasColumnName("AuthorID");
            entity.Property(e => e.CategoryId).HasColumnName("CategoryID");
            entity.Property(e => e.Content).HasColumnType("nvarchar(500)");
            entity.Property(e => e.ImageUrl).HasMaxLength(500);
            entity.Property(e => e.PublishedAt).HasColumnType("datetime");
            entity.Property(e => e.Summary).HasColumnType("nvarchar(500)");
            entity.Property(e => e.Tags).HasMaxLength(500);
            entity.Property(e => e.Title).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");

            entity.HasOne(d => d.Author).WithMany(p => p.News)
                .HasForeignKey(d => d.AuthorId)
                .HasConstraintName("FK__News__AuthorID__664B26CC");

            entity.HasOne(d => d.Category).WithMany(p => p.News)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("FK__News__CategoryID__5CC1BC92");
        });

        modelBuilder.Entity<Order>(entity =>
        {
            entity.HasKey(e => e.OrderId).HasName("PK__Orders__C3905BAF9AB3A92A");

            entity.Property(e => e.OrderId).HasColumnName("OrderID");
            entity.Property(e => e.Address).HasMaxLength(500);
            entity.Property(e => e.City).HasMaxLength(500);
            entity.Property(e => e.Country).HasMaxLength(500);
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(500);
            entity.Property(e => e.FirstName).HasMaxLength(500);
            entity.Property(e => e.LastName).HasMaxLength(500);
            entity.Property(e => e.Optional).HasMaxLength(500);
            entity.Property(e => e.PaymentId).HasColumnName("PaymentID");
            entity.Property(e => e.PhoneNumber).HasMaxLength(500);
            entity.Property(e => e.Status).HasMaxLength(500);
            entity.Property(e => e.TotalAmount).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.ZipCode).HasMaxLength(500);

            entity.HasOne(d => d.Payment).WithMany(p => p.Orders)
                .HasForeignKey(d => d.PaymentId)
                .HasConstraintName("FK__Orders__PaymentI__5AD97420");

            entity.HasOne(d => d.User).WithMany(p => p.Orders)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Orders__UserID__57FD0775");
        });

        modelBuilder.Entity<OrderItem>(entity =>
        {
            entity.HasKey(e => e.OrderItemId).HasName("PK__OrderIte__57ED06A1F9D9AFCD");

            entity.Property(e => e.OrderItemId).HasColumnName("OrderItemID");
            entity.Property(e => e.OrderId).HasColumnName("OrderID");
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");

            entity.HasOne(d => d.Order).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.OrderId)
                .HasConstraintName("FK__OrderItem__Order__58F12BAE");

            entity.HasOne(d => d.Product).WithMany(p => p.OrderItems)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__OrderItem__Produ__59E54FE7");
        });

        modelBuilder.Entity<Payment>(entity =>
        {
            entity.HasKey(e => e.PaymentId).HasName("PK__Payment__9B556A588C0FC8EE");

            entity.ToTable("Payment");

            entity.Property(e => e.PaymentId).HasColumnName("PaymentID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.PaymentMethod).HasMaxLength(500);
            entity.Property(e => e.PaymentStatus).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Producer>(entity =>
        {
            entity.HasKey(e => e.ProducerId).HasName("PK__Producer__133696B21BFFA94E");

            entity.Property(e => e.ProducerId).HasColumnName("ProducerID");
            entity.Property(e => e.ContactInfo).HasColumnType("nvarchar(500)");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.ProductId).HasName("PK__Products__B40CC6ED1003C944");

            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.CategoryId).HasColumnName("CategoryID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Image1).HasMaxLength(500);
            entity.Property(e => e.Image2).HasMaxLength(500);
            entity.Property(e => e.Image3).HasMaxLength(500);
            entity.Property(e => e.Image4).HasMaxLength(500);
            entity.Property(e => e.Price).HasColumnType("decimal(10, 2)");
            entity.Property(e => e.ProductType).HasMaxLength(500);
            entity.Property(e => e.Rating).HasColumnType("decimal(3, 2)");
            entity.Property(e => e.ReleaseDate).HasColumnType("date");
            entity.Property(e => e.Status).HasMaxLength(500);
            entity.Property(e => e.Title).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");

            entity.HasOne(d => d.Category).WithMany(p => p.Products)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("FK__Products__Catego__4AA30C57");
        });

        modelBuilder.Entity<Promotion>(entity =>
        {
            entity.HasKey(e => e.PromotionId).HasName("PK__Promotio__52C42F2F1989755D");

            entity.Property(e => e.PromotionId).HasColumnName("PromotionID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.DiscountPercentage).HasColumnType("decimal(5, 2)");
            entity.Property(e => e.EndDate).HasColumnType("datetime");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.StartDate).HasColumnType("datetime");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");

            entity.HasOne(d => d.Product).WithMany(p => p.Promotions)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__Promotion__Produ__60924D76");
        });

        modelBuilder.Entity<Publisher>(entity =>
        {
            entity.HasKey(e => e.PublisherId).HasName("PK__Publishe__4C657E4B0DED94D5");

            entity.Property(e => e.PublisherId).HasColumnName("PublisherID");
            entity.Property(e => e.ContactInfo).HasColumnType("nvarchar(500)");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Name).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Review>(entity =>
        {
            entity.HasKey(e => e.ReviewId).HasName("PK__Reviews__74BC79AE0E7046C8");

            entity.Property(e => e.ReviewId).HasColumnName("ReviewID");
            entity.Property(e => e.Comment).HasColumnType("nvarchar(500)");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.ProductId).HasColumnName("ProductID");
            entity.Property(e => e.Rating).HasColumnType("decimal(3, 2)");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.Product).WithMany(p => p.Reviews)
                .HasForeignKey(d => d.ProductId)
                .HasConstraintName("FK__Reviews__Product__5708E33C");

            entity.HasOne(d => d.User).WithMany(p => p.Reviews)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__Reviews__UserID__5614BF03");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.RoleId).HasName("PK__Roles__8AFACE3A34B848B0");

            entity.Property(e => e.RoleId).HasColumnName("RoleID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.RoleName).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
        });

        modelBuilder.Entity<Song>(entity =>
        {
            entity.HasKey(e => e.SongId).HasName("PK__Songs__12E3D6F7BCBEC98F");

            entity.Property(e => e.SongId).HasColumnName("SongID");
            entity.Property(e => e.AlbumId).HasColumnName("AlbumID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Image).HasMaxLength(500).HasColumnName("image");
            entity.Property(e => e.Link).HasMaxLength(500);
            entity.Property(e => e.ReleaseDate).HasColumnType("date");
            entity.Property(e => e.Title).HasMaxLength(500);
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");

            entity.HasOne(d => d.Album).WithMany(p => p.Songs)
                .HasForeignKey(d => d.AlbumId)
                .HasConstraintName("FK__Songs__AlbumID__4C8B54C9");
        });

        modelBuilder.Entity<SongArtist>(entity =>
        {
            entity.HasKey(e => new { e.SongId, e.ArtistId });

            entity.HasOne(sa => sa.Song)
                .WithMany(s => s.SongArtists)
                .HasForeignKey(sa => sa.SongId);

            entity.HasOne(sa => sa.Artist)
                .WithMany(a => a.SongArtists)
                .HasForeignKey(sa => sa.ArtistId);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__Users__1788CCAC8F6D3B48");

            entity.HasIndex(e => e.Username, "UQ__Users__536C85E448F0F00E").IsUnique();

            entity.HasIndex(e => e.Email, "UQ__Users__A9D10534122246E1").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("UserID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.Email).HasMaxLength(500);
            entity.Property(e => e.Password).HasMaxLength(500);
            entity.Property(e => e.TokenExpiryDate).HasColumnType("datetime");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
            entity.Property(e => e.Username).HasMaxLength(500);
            entity.Property(e => e.VerificationToken).HasMaxLength(500);
            entity.Property(e => e.FirstName).HasMaxLength(500).IsRequired(false);
            entity.Property(e => e.LastName).HasMaxLength(500).IsRequired(false); 
            entity.Property(e => e.Phone).HasMaxLength(500).IsRequired(false);
        });

        modelBuilder.Entity<UserRole>(entity =>
        {
            entity.HasKey(e => e.UserRoleId).HasName("PK__UserRole__3D978A559B0398EC");

            entity.Property(e => e.UserRoleId).HasColumnName("UserRoleID");
            entity.Property(e => e.CreatedAt).HasColumnType("datetime");
            entity.Property(e => e.RoleId).HasColumnName("RoleID");
            entity.Property(e => e.UpdatedAt).HasColumnType("datetime");
            entity.Property(e => e.UserId).HasColumnName("UserID");

            entity.HasOne(d => d.Role).WithMany(p => p.UserRoles)
                .HasForeignKey(d => d.RoleId)
                .HasConstraintName("FK__UserRoles__RoleI__627A95E8");

            entity.HasOne(d => d.User).WithMany(p => p.UserRoles)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("FK__UserRoles__UserI__618671AF");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}