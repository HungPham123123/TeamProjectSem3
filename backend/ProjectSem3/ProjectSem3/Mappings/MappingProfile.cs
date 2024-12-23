﻿using AutoMapper;
using ProjectSem3.DTOs;
using ProjectSem3.Models;

public class MappingProfile : Profile
{
    public MappingProfile()
    {
        CreateMap<Album, AlbumDto>().ReverseMap();
        CreateMap<AddAlbumDto, Album>()
            .ForMember(dest => dest.Songs, opt => opt.Ignore()); // Bỏ qua việc ánh xạ danh sách bài hát
        CreateMap<UpdateAlbumDto, Album>()
            .ForMember(dest => dest.Songs, opt => opt.Ignore()); // Bỏ qua việc ánh xạ danh sách bài hát

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

        CreateMap<Product, ProductAlbumFilterDto>()
           .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.CategoryName))
           .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))  // Adjust as needed
           .ForMember(dest => dest.Albums, opt => opt.MapFrom(src => src.Albums))  // Map Albums collection
           .ReverseMap();

        CreateMap<Product, ProductMovieFilterDto>()
            .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.CategoryName))
            .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))  // Add other necessary fields
            .ReverseMap();

        CreateMap<Product, ProductGameFilterDto>()
            .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.CategoryName))
            .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))  // Add other necessary fields
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
        CreateMap<Order, OrderManageDTO>().ReverseMap();
        CreateMap<Order, OrderDto>().ReverseMap();
        CreateMap<OrderItem, OrderItemDTO>()
            .ForMember(dest => dest.ProductTitle, opt => opt.MapFrom(src => src.Product.Title))
            .ForMember(dest => dest.ProductImage, opt => opt.MapFrom(src => src.Product.Image1));


        // Cấu hình OrderUpdateDTO -> Order
        CreateMap<OrderUpdateDTO, Order>()
            .ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Address))
            .ReverseMap();


        CreateMap<Review, ReviewManageDTO>()
                .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.User.Username))
                .ForMember(dest => dest.ProductTitle, opt => opt.MapFrom(src => src.Product.Title))
                .ReverseMap();
        CreateMap<AddReviewDTO, Review>()
                  .ForMember(dest => dest.ReviewId, opt => opt.Ignore()) // Bỏ qua ReviewId nếu nó được tự động sinh
                  .ForMember(dest => dest.CreatedAt, opt => opt.Ignore()); // Hoặc đặt giá trị mặc định nếu cần

        CreateMap<UpdateReviewDto, Review>();

        CreateMap<Promotion, PromotionManageDTO>()
                .ForMember(dest => dest.ProductTitle, opt => opt.MapFrom(src => src.Product.Title))
                .ReverseMap();
        CreateMap<PromotionCreateDTO, Promotion>();

        CreateMap<UpdateUserDTO, User>()
                .ForMember(dest => dest.Username, opt => opt.Ignore()); // Không ánh xạ Username

        CreateMap<Publisher, PublisherDto>().ReverseMap();
        CreateMap<AddPublisherDto, Publisher>();
        CreateMap<UpdatePublisherDto, Publisher>();

        CreateMap<Producer, ProducerDto>();
        CreateMap<AddProducerDto, Producer>();
        CreateMap<UpdateProducerDto, Producer>()
            .ForAllMembers(opts => opts.Condition((src, dest, srcMember) => srcMember != null)); // Đảm bảo chỉ cập nhật khi có dữ liệu

        CreateMap<News,NewsDto>().ReverseMap();
        CreateMap<AddNewsDto, News>();
        CreateMap<UpdateNewsDto, News>();
    }

}
