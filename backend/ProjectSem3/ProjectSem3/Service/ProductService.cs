using AutoMapper;
using ProjectSem3.Models;
using ProjectSem3.Dtos;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;

namespace ProjectSem3.Service
{
    public class ProductService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public ProductService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<ProductDto>> GetAllProductsAsync()
        {
            var products = await _context.Products
                                          .Include(p => p.Category)
                                          .ToListAsync();

            var productDtos = _mapper.Map<List<ProductDto>>(products);
            return productDtos;
        }

        // Get On Selling Products (Least stock quantity)
        public async Task<List<ProductDto>> GetOnSellingProductsAsync()
        {
            var products = await _context.Products
                                          .OrderBy(p => p.StockQuantity)  // Sort by stock quantity (ascending)
                                          .Take(9)  // Get top 9 products
                                          .Include(p => p.Category)
                                          .ToListAsync();

            var productDtos = _mapper.Map<List<ProductDto>>(products);
            return productDtos;
        }

        // Get New Arrivals (Sorted by CreatedAt)
        public async Task<List<ProductDto>> GetNewArrivalsAsync()
        {
            var products = await _context.Products
                                          .OrderByDescending(p => p.CreatedAt)  // Sort by CreatedAt (descending)
                                          .Take(10)  // Get top 10 products
                                          .Include(p => p.Category)
                                          .ToListAsync();

            var productDtos = _mapper.Map<List<ProductDto>>(products);
            return productDtos;
        }

        // Get Best Budget DVDs (Sorted by Price)
        public async Task<List<ProductDto>> GetBestBudgetDvsAsync()
        {
            var products = await _context.Products
                                          .Where(p => p.Price.HasValue)  // Filter out products with no price
                                          .OrderBy(p => p.Price)  // Sort by Price (ascending)
                                          .Take(10)  // Get top 8 products
                                          .Include(p => p.Category)
                                          .ToListAsync();

            var productDtos = _mapper.Map<List<ProductDto>>(products);
            return productDtos;
        }

        public async Task<ProductDetailDto> GetProductByIdAsync(int productId)
        {
            var product = await _context.Products
                                         .Include(p => p.Category)
                                         .Include(p => p.Albums)
                                             .ThenInclude(a => a.Songs)
                                                 .ThenInclude(s => s.SongArtists)
                                                     .ThenInclude(sa => sa.Artist)
                                         .Include(p => p.Games) // Include related games
                                         .Include(p => p.Movies) // Include related movies
                                         .FirstOrDefaultAsync(p => p.ProductId == productId);

            if (product == null)
            {
                return null;
            }

            var productDetailDto = new ProductDetailDto
            {
                ProductId = product.ProductId,
                Title = product.Title,
                CategoryId = product.CategoryId,
                Price = product.Price,
                Rating = product.Rating,
                Status = product.Status,
                ReleaseDate = product.ReleaseDate,
                Image1 = product.Image1,
                Image2 = product.Image2,
                Image3 = product.Image3,
                Image4 = product.Image4,
                ProductType = product.ProductType,
                StockQuantity = product.StockQuantity,
                Albums = new List<AlbumDto>(),
                Games = new List<GameDTO>(),
                Movies = new List<MovieDTO>()
            };

            // Map albums
            foreach (var album in product.Albums)
            {
                var albumDto = new AlbumDto
                {
                    AlbumId = album.AlbumId,
                    Title = album.Title,
                    Biography = album.Biography,
                    ReleaseDate = album.ReleaseDate,
                    Songs = new List<SongDTO>()
                };

                foreach (var song in album.Songs)
                {
                    var songDto = new SongDTO
                    {
                        SongId = song.SongId,
                        Title = song.Title,
                        Image = song.Image,
                        ReleaseDate = song.ReleaseDate,
                        Link = song.Link,
                        Artists = new List<ArtistDTO>()
                    };

                    foreach (var songArtist in song.SongArtists)
                    {
                        var artistDto = new ArtistDTO
                        {
                            ArtistId = songArtist.ArtistId,
                            Name = songArtist.Artist.Name,
                            Biography = songArtist.Artist.Biography,
                            Social = songArtist.Artist.Social,
                            Born = songArtist.Artist.Born,
                            Image = songArtist.Artist.Image
                        };

                        songDto.Artists.Add(artistDto);
                    }

                    albumDto.Songs.Add(songDto);
                }

                productDetailDto.Albums.Add(albumDto);
            }

            // Map games
            foreach (var game in product.Games)
            {
                var gameDto = new GameDTO
                {
                    GameId = game.GameId,
                    DeveloperId = game.DeveloperId,
                    PublisherId = game.PublisherId,
                    Biography = game.Biography,
                    CreatedAt = game.CreatedAt,
                    UpdatedAt = game.UpdatedAt
                };

                productDetailDto.Games.Add(gameDto);
            }

            // Map movies
            // Iterate through all movies in the product's Movies collection
            foreach (var movie in product.Movies)
            {
                // Fetch the Director and Producer based on their IDs
                var director = await _context.Directors
                                              .FirstOrDefaultAsync(d => d.DirectorId == movie.DirectorId);
                var producer = await _context.Producers
                                              .FirstOrDefaultAsync(p => p.ProducerId == movie.ProducerId);

                // Create a MovieDTO for each movie
                var movieDto = new MovieDTO
                {
                    MovieId = movie.MovieId,
                    DirectorId = movie.DirectorId,
                    ProducerId = movie.ProducerId,
                    Link = movie.Link,
                    Biography = movie.Biography,
                    CreatedAt = movie.CreatedAt,
                    UpdatedAt = movie.UpdatedAt,
                    DirectorName = director?.Name,  // Fetch Director's Name based on DirectorId
                    ProducerName = producer?.Name  // Fetch Producer's Name based on ProducerId
                };

                // Debugging: Check if Director or Producer is null
                if (director == null)
                {
                    Console.WriteLine($"Movie {movie.MovieId} does not have a valid Director");
                }

                if (producer == null)
                {
                    Console.WriteLine($"Movie {movie.MovieId} does not have a valid Producer");
                }

                // Add the movieDto to your productDetailDto's Movies list
                productDetailDto.Movies.Add(movieDto);
            }




            return productDetailDto;
        }



    }
}
