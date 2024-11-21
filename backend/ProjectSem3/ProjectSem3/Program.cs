using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ProjectSem3.Configurations; // Ensure this namespace is included for JwtSettings
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service;
using ProjectSem3.Service.Interfaces;
using Stripe;
using System.Text;
using static System.Runtime.InteropServices.JavaScript.JSType;

// Define aliases for ambiguous services
using ProjectReviewService = ProjectSem3.Service.ReviewService;
using StripeReviewService = Stripe.ReviewService;
using ProjectProductService = ProjectSem3.Service.ProductService;
using StripeProductService = Stripe.ProductService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<OnlineDvdsContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.Configure<JwtSettings>(builder.Configuration.GetSection("Jwt"));

builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<EmailService>();
builder.Services.AddScoped<ICategoryService, CategoryService>();
builder.Services.AddScoped<IArtistService, ArtistService>();
builder.Services.AddScoped<CartService>();
builder.Services.AddScoped<ProjectProductService>(); // Specify the project ProductService
builder.Services.AddScoped<ISGMService<SongDTO>, SongService>();
builder.Services.AddScoped<ISGMService<GameDTO>, GameService>();
builder.Services.AddScoped<ISGMService<MovieDTO>, MovieService>();
builder.Services.AddScoped<IUserManageService, UserManageService>();
builder.Services.AddScoped<IFeedbackService, FeedbackService>();
builder.Services.AddScoped<IProductManageService, ProductManageService>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddScoped<NewsService>();
builder.Services.AddScoped<IReviewService, ProjectReviewService>(); // Specify the project ReviewService
builder.Services.AddScoped<IPromotionService, PromotionService>();
builder.Services.AddScoped<PaymentService>();
builder.Services.AddScoped<FilterService>();
builder.Services.AddScoped<UserOrderService>();
builder.Services.AddScoped<UserReviewService>();
builder.Services.AddScoped<CollectionService>();
builder.Services.AddScoped<AlbumService>();
builder.Services.AddScoped<PublisherService>();
builder.Services.AddScoped<ProducerService>();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:SecretKey"]))
        };
    });

StripeConfiguration.ApiKey = builder.Configuration["Stripe:SecretKey"];

builder.Services.Configure<StripeSettings>(builder.Configuration.GetSection("Stripe"));

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAllOrigins",
        builder =>
        {
            builder.AllowAnyOrigin()
                   .AllowAnyMethod()
                   .AllowAnyHeader();
        });
});
builder.Services.AddHttpContextAccessor();
builder.Services.AddAutoMapper(typeof(MappingProfile));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("AllowAllOrigins");
app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.Run();
