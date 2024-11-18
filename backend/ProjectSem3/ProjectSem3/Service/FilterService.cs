using AutoMapper;
using ProjectSem3.Models;
using ProjectSem3.Dtos;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;

namespace ProjectSem3.Service
{
    public class FilterService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public FilterService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // Get all albums with ProductAlbumFilterDto
        public async Task<List<ProductAlbumFilterDto>> GetAllAlbumsAsync()
        {
            var products = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Albums)
                    .ThenInclude(a => a.Songs)
                        .ThenInclude(s => s.SongArtists)
                            .ThenInclude(sa => sa.Artist)
                .Where(p => p.Albums.Any()) // Only include products with albums
                .ToListAsync();

            var albumDtos = new List<ProductAlbumFilterDto>();

            foreach (var product in products)
            {
                var albumDto = _mapper.Map<ProductAlbumFilterDto>(product);
                foreach (var album in product.Albums)
                {
                    var albumDetail = _mapper.Map<AlbumDto>(album);
                    albumDto.Albums.Add(albumDetail);
                }
                albumDtos.Add(albumDto);
            }

            return albumDtos;
        }

        // Get all movies with ProductMovieFilterDto
        public async Task<List<ProductMovieFilterDto>> GetAllMoviesAsync()
        {
            var products = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Movies)
                .Where(p => p.Movies.Any()) // Only include products with movies
                .ToListAsync();

            var movieDtos = new List<ProductMovieFilterDto>();

            foreach (var product in products)
            {
                var movieDto = _mapper.Map<ProductMovieFilterDto>(product);
                foreach (var movie in product.Movies)
                {
                    var movieDetail = _mapper.Map<MovieDTO>(movie);
                    movieDto.Movies.Add(movieDetail);
                }
                movieDtos.Add(movieDto);
            }

            return movieDtos;
        }

        // Get all games with ProductGameFilterDto
        public async Task<List<ProductGameFilterDto>> GetAllGamesAsync()
        {
            var products = await _context.Products
                .Include(p => p.Category)
                .Include(p => p.Games)
                .Where(p => p.Games.Any()) // Only include products with games
                .ToListAsync();

            var gameDtos = new List<ProductGameFilterDto>();

            foreach (var product in products)
            {
                var gameDto = _mapper.Map<ProductGameFilterDto>(product);
                foreach (var game in product.Games)
                {
                    var gameDetail = _mapper.Map<GameDTO>(game);
                    gameDto.Games.Add(gameDetail);
                }
                gameDtos.Add(gameDto);
            }

            return gameDtos;
        }

        // Search albums based on title or searchTerm
        public async Task<List<ProductAlbumFilterDto>> SearchAlbumsAsync(string? searchTerm)
        {
            var query = _context.Products
                .Include(p => p.Category)
                .Include(p => p.Albums)
                .Where(p => p.Albums.Any()); // Filter only products with albums

            // If a search term is provided, filter by Product.Title
            if (!string.IsNullOrEmpty(searchTerm))
            {
                query = query.Where(p => p.Title.Contains(searchTerm));
            }

            var products = await query.ToListAsync();

            var albumDtos = products.Select(product =>
            {
                var albumDto = _mapper.Map<ProductAlbumFilterDto>(product);
                albumDto.Albums = product.Albums
                    .Select(album => _mapper.Map<AlbumDto>(album))
                    .ToList();
                return albumDto;
            }).ToList();

            return albumDtos;
        }

        // Search movies based on title or searchTerm
        public async Task<List<ProductMovieFilterDto>> SearchMoviesAsync(string? searchTerm)
        {
            var query = _context.Products
                .Include(p => p.Category)
                .Include(p => p.Movies)
                .Where(p => p.Movies.Any()); // Filter only products with movies

            // If a search term is provided, filter by Product.Title
            if (!string.IsNullOrEmpty(searchTerm))
            {
                query = query.Where(p => p.Title.Contains(searchTerm));
            }

            var products = await query.ToListAsync();

            var movieDtos = products.Select(product =>
            {
                var movieDto = _mapper.Map<ProductMovieFilterDto>(product);
                movieDto.Movies = product.Movies
                    .Select(movie => _mapper.Map<MovieDTO>(movie))
                    .ToList();
                return movieDto;
            }).ToList();

            return movieDtos;
        }

        // Search games based on title or searchTerm
        public async Task<List<ProductGameFilterDto>> SearchGamesAsync(string? searchTerm)
        {
            var query = _context.Products
                .Include(p => p.Category)
                .Include(p => p.Games)
                .Where(p => p.Games.Any()); // Filter only products with games

            // If a search term is provided, filter by Product.Title
            if (!string.IsNullOrEmpty(searchTerm))
            {
                query = query.Where(p => p.Title.Contains(searchTerm));
            }

            var products = await query.ToListAsync();

            var gameDtos = products.Select(product =>
            {
                var gameDto = _mapper.Map<ProductGameFilterDto>(product);
                gameDto.Games = product.Games
                    .Select(game => _mapper.Map<GameDTO>(game))
                    .ToList();
                return gameDto;
            }).ToList();

            return gameDtos;
        }

        // Search all products, filtering by searchTerm (all categories)
        public async Task<List<ProductDto>> SearchAllProductsAsync(string? searchTerm = null)
        {
            var query = _context.Products.AsQueryable();

            // Only filter if a search term is provided
            if (!string.IsNullOrEmpty(searchTerm))
            {
                query = query.Where(p => p.Title.Contains(searchTerm)); // Filter by title
            }

            var products = await query.Include(p => p.Category)
                                       .ToListAsync();

            var productDtos = _mapper.Map<List<ProductDto>>(products);
            return productDtos;
        }
    }
}
