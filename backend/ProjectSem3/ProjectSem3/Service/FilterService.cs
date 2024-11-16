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
    }
}
