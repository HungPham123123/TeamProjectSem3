using AutoMapper;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using System;
using System.Collections.Generic;
using System.Linq;

public class AlbumService
{
    private readonly OnlineDvdsContext _context;
    private readonly IMapper _mapper;

    public AlbumService(OnlineDvdsContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    public IEnumerable<AlbumDto> GetAllAlbums()
    {
        var albums = _context.Albums
                             .Include(album => album.Songs)  // Eager load các bài hát
                             .ToList()
                             .Select(album => new AlbumDto
                             {
                                 AlbumId = album.AlbumId,
                                 Title = album.Title,
                                 Biography = album.Biography,
                                 ReleaseDate = album.ReleaseDate,
                                 Songs = album.Songs.Select(song => new SongDTO
                                 {
                                     Title = song.Title  // Chỉ chọn tên bài hát
                                 }).ToList()  // Chuyển sang danh sách SongDTO chỉ chứa Title
                             });

        return albums;
    }



    public AlbumDto? GetAlbumById(int id)
    {
        var album = _context.Albums
            .Include(a => a.Songs)
            .FirstOrDefault(a => a.AlbumId == id);

        return _mapper.Map<AlbumDto>(album);
    }

    public AlbumDto AddAlbum(AddAlbumDto addAlbumDto)
    {
        // Kiểm tra xem album có thông tin bài hát không
        if (addAlbumDto.SongTitles != null && addAlbumDto.SongTitles.Any())
        {
            // Tạo album mới từ DTO
            var album = new Album
            {
                Title = addAlbumDto.Title,
                Biography = addAlbumDto.Biography,
                ReleaseDate = addAlbumDto.ReleaseDate,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            // Thêm album vào DB
            _context.Albums.Add(album);
            _context.SaveChanges();

            // Kiểm tra và thêm các bài hát vào album
            var songs = _context.Songs
                .Where(song => addAlbumDto.SongTitles.Contains(song.Title))
                .ToList();

            // Các bài hát không tồn tại sẽ bị báo lỗi
            var nonExistingSongs = addAlbumDto.SongTitles.Except(songs.Select(s => s.Title)).ToList();

            if (nonExistingSongs.Any())
            {
                throw new Exception($"The following songs do not exist: {string.Join(", ", nonExistingSongs)}");
            }

            // Gắn bài hát vào album
            foreach (var song in songs)
            {
                album.Songs.Add(song);
            }

            // Lưu lại album với các bài hát đã được thêm
            _context.SaveChanges();

            return _mapper.Map<AlbumDto>(album);
        }
        else
        {
            throw new Exception("No songs provided for this album.");
        }
    }

    public AlbumDto UpdateAlbum(int albumId, UpdateAlbumDto updateAlbumDto)
    {
        // Tìm album trong cơ sở dữ liệu
        var album = _context.Albums.Include(a => a.Songs)
                                   .FirstOrDefault(a => a.AlbumId == albumId);

        if (album == null)
        {
            throw new Exception("Album not found.");
        }

        // Cập nhật các thuộc tính của album
        album.Title = updateAlbumDto.Title ?? album.Title;
        album.Biography = updateAlbumDto.Biography ?? album.Biography;
        album.UpdatedAt = DateTime.UtcNow;

        // Cập nhật danh sách bài hát của album
        var existingSongs = _context.Songs
                                    .Where(song => updateAlbumDto.SongTitles.Contains(song.Title))
                                    .ToList();

        var nonExistingSongs = updateAlbumDto.SongTitles.Except(existingSongs.Select(s => s.Title)).ToList();

        // Nếu có bài hát không tồn tại trong DB, báo lỗi
        if (nonExistingSongs.Any())
        {
            throw new Exception($"The following songs do not exist: {string.Join(", ", nonExistingSongs)}");
        }

        // Xoá các bài hát cũ không còn trong danh sách
        var songsToRemove = album.Songs.Where(s => !updateAlbumDto.SongTitles.Contains(s.Title)).ToList();
        foreach (var song in songsToRemove)
        {
            album.Songs.Remove(song);
        }

        // Thêm các bài hát đã tồn tại vào album
        foreach (var song in existingSongs)
        {
            if (!album.Songs.Contains(song))
            {
                album.Songs.Add(song);
            }
        }

        // Lưu lại album đã cập nhật
        _context.SaveChanges();

        return _mapper.Map<AlbumDto>(album);
    }


    public async Task<bool> DeleteAlbum(int id)
    {
        // Xóa các bài hát liên quan
        var songs = await _context.Songs.Where(s => s.AlbumId == id).ToListAsync();
        if (songs.Any())
        {
            _context.Songs.RemoveRange(songs); // Xóa tất cả bài hát
        }

        // Sau đó xóa album
        var album = await _context.Albums.FindAsync(id);
        if (album != null)
        {
            _context.Albums.Remove(album);
            await _context.SaveChangesAsync();
            return true;  // Album đã được xóa thành công
        }

        return false;  // Không tìm thấy album để xóa
    }



    public IEnumerable<AlbumDto> SearchAlbums(string keyword)
    {
        var albums = _context.Albums
            .Where(a => a.Title.Contains(keyword) || a.Biography.Contains(keyword))
            .ToList();

        return albums.Select(album => _mapper.Map<AlbumDto>(album));
    }
}
