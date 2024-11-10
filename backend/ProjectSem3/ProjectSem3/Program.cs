using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using ProjectSem3.Configurations; // Make sure to include the namespace for JwtSettings
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using ProjectSem3.Service;
using ProjectSem3.Service.Interfaces;
using System.Text;
using static System.Runtime.InteropServices.JavaScript.JSType;

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
builder.Services.AddScoped<ProductService>();
builder.Services.AddScoped<ISGMService<SongDTO>, SongService>();
builder.Services.AddScoped<ISGMService<GameDTO>, GameService>();
builder.Services.AddScoped<ISGMService<MovieDTO>, MovieService>();
builder.Services.AddScoped<IUserManageService, UserManageService>();
builder.Services.AddScoped<IFeedbackService, FeedbackService>();
builder.Services.AddScoped<IProductManageService, ProductManageService>();
builder.Services.AddScoped<IOrderService, OrderService>();
builder.Services.AddScoped<INewsService, NewsService>();
builder.Services.AddScoped<IReviewService, ReviewService>();
builder.Services.AddScoped<IPromotionService, PromotionService>();



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
app.UseAuthentication(); // Ensure authentication is included
app.UseAuthorization();

app.MapControllers();
app.Run();
