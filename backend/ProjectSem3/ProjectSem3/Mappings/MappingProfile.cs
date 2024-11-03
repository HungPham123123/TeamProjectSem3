using AutoMapper;
using ProjectSem3.DTOs;
using ProjectSem3.Models;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Artist, ArtistDTO>().ReverseMap()
            .ForMember(dest => dest.ArtistId, opt => opt.Ignore()); // Bỏ qua ArtistId khi ánh xạ từ ArtistDTO về Artist
    }
}
