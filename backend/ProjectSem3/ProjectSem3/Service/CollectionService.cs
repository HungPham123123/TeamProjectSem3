using ProjectSem3.Models;
using ProjectSem3.DTOs;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using System.Linq;
using System.Threading.Tasks;
using ProjectSem3.Dtos;
using ProjectSem3.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace ProjectSem3.Service
{
    public class CollectionService
    {
        private readonly OnlineDvdsContext _context;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public CollectionService(OnlineDvdsContext context, IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _httpContextAccessor = httpContextAccessor;
        }

        private int GetUserIdFromToken()
        {
            var token = _httpContextAccessor.HttpContext?.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();
            if (token == null)
            {
                throw new InvalidOperationException("Token not provided.");
            }

            var handler = new JwtSecurityTokenHandler();
            var jwtToken = handler.ReadToken(token) as JwtSecurityToken;

            var userIdClaim = jwtToken?.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
            {
                throw new InvalidOperationException("User ID not found in token.");
            }

            return int.Parse(userIdClaim.Value); // Assuming the user ID is an integer
        }

        // Method to fetch user's collection of products
        public async Task<CollectionDto> GetUserCollection(int userId)
        {
            userId = GetUserIdFromToken(); // Retrieve user ID from token

            var collection = await _context.Collections
                .Include(c => c.CollectionItems)
                    .ThenInclude(ci => ci.Product)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (collection == null)
            {
                collection = new Collection
                {
                    UserId = userId,
                    Title = "Default Collection",
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };
                _context.Collections.Add(collection);
                await _context.SaveChangesAsync();
            }

            var collectionDto = new CollectionDto
            {
                CollectionId = collection.CollectionId,
                Title = collection.Title,
                CreatedAt = collection.CreatedAt,
                UpdatedAt = collection.UpdatedAt,
                CollectionItems = collection.CollectionItems.Select(ci => new CollectionItemDto
                {
                    CollectionItemId = ci.CollectionItemId,
                    ProductId = ci.ProductId ?? 0,
                    Title = ci.Product?.Title ?? "No Title", 
                    Price = ci.Product?.Price ?? 0,
                    Rating = ci.Product?.Rating, 
                    Status = ci.Product?.Status ?? "Unknown", 
                    ReleaseDate = ci.Product?.ReleaseDate,
                    Image1 = ci.Product?.Image1 ?? "",
                    Image2 = ci.Product?.Image2 ?? "",  
                    Image3 = ci.Product?.Image3 ?? "", 
                    Image4 = ci.Product?.Image4 ?? "" 
                }).ToList()
            };

            return collectionDto;
        }

        // Method to add a product to the user's collection
        public async Task AddItemToCollection(int userId, int productId)
        {
             userId = GetUserIdFromToken(); // Retrieve user ID from token

            // Fetch the user's collection, or create a new one if none exists
            var collection = await _context.Collections
                .Include(c => c.CollectionItems)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (collection == null)
            {
                // Create a new collection if one doesn't exist
                collection = new Collection
                {
                    UserId = userId,
                    Title = "Default Collection",
                    CreatedAt = DateTime.UtcNow,
                    UpdatedAt = DateTime.UtcNow
                };
                _context.Collections.Add(collection);
                await _context.SaveChangesAsync();  // Save to get the collection's ID
            }

            // Check if the product is already in the collection
            var existingItem = collection.CollectionItems.FirstOrDefault(ci => ci.ProductId == productId);
            if (existingItem != null)
            {
                throw new InvalidOperationException("This product is already in the collection.");
            }

            // Add the new product to the collection
            var newCollectionItem = new CollectionItem
            {
                ProductId = productId
            };

            collection.CollectionItems.Add(newCollectionItem);
            collection.UpdatedAt = DateTime.UtcNow;

            _context.CollectionItems.Add(newCollectionItem);
            await _context.SaveChangesAsync();  // Save changes to the database
        }

        // Method to remove a product from the user's collection
        public async Task RemoveItemFromCollection(int userId, int productId)
        {
            userId = GetUserIdFromToken(); // Retrieve user ID from token

            var collection = await _context.Collections
                .Include(c => c.CollectionItems)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (collection == null)
            {
                throw new InvalidOperationException("Collection not found for the user.");
            }

            var collectionItem = collection.CollectionItems.FirstOrDefault(ci => ci.ProductId == productId);
            if (collectionItem == null)
            {
                throw new InvalidOperationException("This product is not in the collection.");
            }

            collection.CollectionItems.Remove(collectionItem);
            collection.UpdatedAt = DateTime.UtcNow;

            _context.CollectionItems.Remove(collectionItem);
            await _context.SaveChangesAsync();
        }

        // Optionally: Get Product Details for Collection Item
        public async Task<ProductDto> GetProductDetails(int productId)
        {
            var product = await _context.Products
                .FirstOrDefaultAsync(p => p.ProductId == productId);

            if (product == null)
            {
                throw new InvalidOperationException("Product not found.");
            }

            var productDto = new ProductDto
            {
                ProductId = product.ProductId,
                Title = product.Title,
                Price = product.Price ?? 0,
                Rating = product.Rating ?? 0,
                Status = product.Status,
                ReleaseDate = product.ReleaseDate ?? DateTime.UtcNow,
                Image1 = product.Image1,
                StockQuantity = product.StockQuantity ?? 0
            };

            return productDto;
        }
    }
}
