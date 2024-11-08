using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service.Interfaces;

namespace ProjectSem3.Service
{
    public class GameService : ISGMService<GameDTO>
    {
        private readonly OnlineDvdsContext _context;
        private readonly IMapper _mapper;

        public GameService(OnlineDvdsContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<List<GameDTO>> GetAllAsync()
        {
            var games = await _context.Games.ToListAsync();
            return _mapper.Map<List<GameDTO>>(games);
        }

        public async Task<GameDTO?> GetByIdAsync(int id)
        {
            var game = await _context.Games.FindAsync(id);
            if (game == null) return null;

            return _mapper?.Map<GameDTO>(game);
        }

        public async Task AddAsync(GameDTO gameDto)
        {
            var game = _mapper.Map<Game>(gameDto);
            game.CreatedAt = DateTime.UtcNow;
            game.UpdatedAt = DateTime.UtcNow;
            await _context.Games.AddAsync(game);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(GameDTO gameDto)
        {
            var game = await _context.Games.FindAsync(gameDto.GameId);
            if (game == null) throw new KeyNotFoundException("Game Not Found");

            _mapper.Map(gameDto,game);
            game.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var game = await _context.Games.FindAsync(id);
            if (game != null)
            {
                _context.Games.Remove(game);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<List<GameDTO>> SearchAsync(string keyword)
        {
            var games = await _context.Games
                .Where(g => g.Biography.Contains(keyword) || g.GameId.ToString() == keyword)
                .ToListAsync();

            return _mapper.Map<List<GameDTO>>(games);
        }


    }

}
