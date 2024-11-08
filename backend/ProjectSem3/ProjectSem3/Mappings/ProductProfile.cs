using AutoMapper;
using ProjectSem3.Dtos;
using ProjectSem3.Models;

namespace ProjectSem3.Mappings
{
    public class ProductProfile : Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductDto>()
                .ForMember(dest => dest.CategoryId, opt => opt.MapFrom(src => src.CategoryId))
                .ForMember(dest => dest.Image1, opt => opt.MapFrom(src => src.Image1))
                .ForMember(dest => dest.Image2, opt => opt.MapFrom(src => src.Image2))
                .ForMember(dest => dest.Image3, opt => opt.MapFrom(src => src.Image3))
                .ForMember(dest => dest.Image4, opt => opt.MapFrom(src => src.Image4));
        }
    }
}
