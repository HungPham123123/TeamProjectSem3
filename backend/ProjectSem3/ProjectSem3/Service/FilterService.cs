using ProjectSem3.DTOs;
using ProjectSem3.Models;

namespace ProjectSem3.Service
{
    public class FilterService
    {
        private readonly List<Product> _products;
        private readonly List<Game> _games;
        private readonly List<Movie> _movies;
        private readonly List<Album> _albums;

        public FilterService(List<Product> products, List<Game> games, List<Movie> movies, List<Album> albums)
        {
            _products = products;
            _games = games;
            _movies = movies;
            _albums = albums;
        }

        public List<ProductDetailDto> GetAllGameProductDetails()
        {
            var gameProductDetails = new List<ProductDetailDto>();

            foreach (var game in _games)
            {
                var product = _products.FirstOrDefault(p => p.ProductId == game.ProductId);
                if (product != null)
                {
                    var gameProductDetail = new ProductDetailDto
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
                        Games = new List<GameDTO> // Use Games instead of GameDetails
                        {
                            new GameDTO
                            {
                                GameId = game.GameId,
                                DeveloperId = game.DeveloperId,
                                PublisherId = game.PublisherId,
                                Biography = game.Biography
                            }
                        }
                    };

                    gameProductDetails.Add(gameProductDetail);
                }
            }

            return gameProductDetails;
        }

        public List<ProductDetailDto> GetAllMovieProductDetails()
        {
            var movieProductDetails = new List<ProductDetailDto>();

            foreach (var movie in _movies)
            {
                var product = _products.FirstOrDefault(p => p.ProductId == movie.ProductId);
                if (product != null)
                {
                    var movieProductDetail = new ProductDetailDto
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
                        Movies = new List<MovieDTO> // Use Movies instead of MovieDetails
                        {
                            new MovieDTO
                            {
                                MovieId = movie.MovieId,
                                DirectorId = movie.DirectorId,
                                ProducerId = movie.ProducerId,
                                Biography = movie.Biography
                            }
                        }
                    };

                    movieProductDetails.Add(movieProductDetail);
                }
            }

            return movieProductDetails;
        }

        public List<ProductDetailDto> GetAllAlbumProductDetails()
        {
            var albumProductDetails = new List<ProductDetailDto>();

            foreach (var album in _albums)
            {
                var product = _products.FirstOrDefault(p => p.ProductId == album.ProductId);
                if (product != null)
                {
                    var albumProductDetail = new ProductDetailDto
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
                        Albums = new List<AlbumDto> // Use Albums instead of AlbumDetails
                        {
                            new AlbumDto
                            {
                                AlbumId = album.AlbumId,
                                Title = album.Title,
                                Biography = album.Biography,
                                ReleaseDate = album.ReleaseDate,
                                Songs = album.Songs.Select(song => new SongDTO
                                {
                                    SongId = song.SongId,
                                    Title = song.Title,
                                    Image = song.Image,
                                    ReleaseDate = song.ReleaseDate,
                                    Link = song.Link,
                                    Artists = song.SongArtists.Select(songArtist => new ArtistDTO
                                    {
                                        ArtistId = songArtist.ArtistId,
                                        Name = songArtist.Artist.Name,
                                        Biography = songArtist.Artist.Biography,
                                        Social = songArtist.Artist.Social,
                                        Born = songArtist.Artist.Born,
                                        Image = songArtist.Artist.Image
                                    }).ToList()
                                }).ToList()
                            }
                        }
                    };

                    albumProductDetails.Add(albumProductDetail);
                }
            }

            return albumProductDetails;
        }
    }
}
