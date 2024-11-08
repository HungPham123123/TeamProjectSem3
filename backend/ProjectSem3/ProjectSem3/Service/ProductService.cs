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

        public async Task<ProductDetailDto> GetProductByIdAsync(int productId)
        {
            var product = await _context.Products
                                         .Include(p => p.Category)
                                         .Include(p => p.Albums)
                                             .ThenInclude(a => a.Songs)
                                                 .ThenInclude(s => s.SongArtists)
                                                     .ThenInclude(sa => sa.Artist)
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
                Albums = new List<AlbumDto>()
            };

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

            return productDetailDto;
        }


    }
}
