using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Service
{
    public class MovieService : ISGMService<MovieDTO>
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public MovieService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<MovieDTO>> GetAllAsync()
        {
            var movies = await _context.Movies.ToListAsync();
            return _mapper.Map<List<MovieDTO>>(movies);
        }

        public async Task<MovieDTO?> GetByIdAsync(int id)
        {
            var movie = await _context.Movies.FindAsync(id);
            if (movie == null) throw new KeyNotFoundException("Movie Not Found");

            return _mapper?.Map<MovieDTO>(movie);
        }

        public async Task AddAsync(MovieDTO movieDto)
        {
            var movie = _mapper.Map<Movie>(movieDto);
            movie.CreatedAt = DateTime.Now;
            movie.UpdatedAt = DateTime.Now;
            await _context.Movies.AddAsync(movie);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(MovieDTO movieDto)
        {
            var movie = await _context.Movies.FindAsync(movieDto.MovieId);
            if (movie == null) throw new KeyNotFoundException("Movie not found");

            _mapper.Map(movieDto, movie);
            movie.UpdatedAt = DateTime.Now;

            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var movie = await _context.Movies.FindAsync(id);
            if (movie != null)
            {
                _context.Movies.Remove(movie);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<MovieDTO>> SearchAsync(string searchTerm)
        {
            var movies = await _context.Movies
                .Where(m => m.Biography.Contains(searchTerm))
                .ToListAsync();

            return _mapper.Map<List<MovieDTO>>(movies);
        }

    }

}
