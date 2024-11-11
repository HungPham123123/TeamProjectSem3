using AutoMapper;
using ProjectSem3.DTOs;
using ProjectSem3.Models;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Artist, ArtistDTO>().ReverseMap()
            .ForMember(dest => dest.ArtistId, opt => opt.Ignore()); // Bỏ qua ID khi ánh xạ từ DTO về Entity

        CreateMap<Song, SongDTO>().ReverseMap()
            .ForMember(dest => dest.SongId, opt => opt.Ignore()); // Bỏ qua ID khi ánh xạ từ DTO về Entity

        CreateMap<Game, GameDTO>().ReverseMap()
                    .ForMember(dest => dest.GameId, opt => opt.Ignore()); // Bỏ qua ID khi ánh xạ từ DTO về Entity

        CreateMap<Movie, MovieDTO>().ReverseMap()
                    .ForMember(dest => dest.MovieId, opt => opt.Ignore()); // Bỏ qua ID khi ánh xạ từ DTO về Entity

        CreateMap<User, UserManageDTO>()
            .ForMember(dest => dest.UserRole,
                       opt => opt.MapFrom(src => src.UserRoles.FirstOrDefault().Role.RoleName))
            .ReverseMap();

        CreateMap<Feedback, FeedbackManageDTO>()
                .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.User.Username))
                .ReverseMap();

        CreateMap<Product, ProductManageDTO>()
                .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.CategoryName))
                .ReverseMap();

        // Cấu hình Order -> OrderResponseDTO
        CreateMap<Order, OrderResponseDTO>()
            .ForMember(dest => dest.UserName, opt => opt.MapFrom(src => src.User.Username))
            .ForMember(dest => dest.PaymentMethod, opt => opt.MapFrom(src => src.Payment.PaymentMethod))
            .ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Address))
            .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.PhoneNumber))
            .ForMember(dest => dest.Tax, opt => opt.MapFrom(src => src.Tax))
            .ForMember(dest => dest.TotalAmount, opt => opt.MapFrom(src => src.TotalAmount))
            .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status))
            .ForMember(dest => dest.CreatedAt, opt => opt.MapFrom(src => src.CreatedAt))
            .ForMember(dest => dest.OrderItems, opt => opt.MapFrom(src => src.OrderItems))
            .ReverseMap();

        // Cấu hình OrderUpdateDTO -> Order
        CreateMap<OrderUpdateDTO, Order>()
            .ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Address))
            .ReverseMap();

        CreateMap<News, NewsManageDTO>()
                .ForMember(dest => dest.AuthorName, opt => opt.MapFrom(src => src.Author.Username))
                .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.CategoryName))
                .ReverseMap();

        CreateMap<Review, ReviewManageDTO>()
                .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.User.Username))
                .ForMember(dest => dest.ProductTitle, opt => opt.MapFrom(src => src.Product.Title))
                .ReverseMap();

        CreateMap<Promotion, PromotionManageDTO>()
                .ForMember(dest => dest.ProductTitle, opt => opt.MapFrom(src => src.Product.Title))
                .ReverseMap();
        CreateMap<UpdateUserDTO, User>()
                .ForMember(dest => dest.Username, opt => opt.Ignore()); // Không ánh xạ Username
    }

}
