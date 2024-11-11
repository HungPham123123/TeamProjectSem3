using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;

public class CartService
{
    private readonly OnlineDvdsContext _context;

    public CartService(OnlineDvdsContext context)
    {
        _context = context;
    }

    // Show the user's cart
    public CartDto ShowCart(int userId)
    {
        var cart = _context.Carts
            .Where(c => c.UserId == userId)
            .Select(c => new CartDto
            {
                CartId = c.CartId,
                UserId = c.UserId,
                CreatedAt = c.CreatedAt,
                UpdatedAt = c.UpdatedAt,
                CartItems = c.CartItems.Select(ci => new CartItemDto
                {
                    CartItemId = ci.CartItemId,
                    ProductId = ci.ProductId ?? 0,
                    ProductTitle = ci.Product != null ? ci.Product.Title : string.Empty,
                    Quantity = ci.Quantity ?? 0,
                    Price = ci.Price ?? 0,
                    ProductImage = ci.Product.Image1,
                    CreatedAt = ci.CreatedAt,
                    UpdatedAt = ci.UpdatedAt
                }).ToList()
            })
            .FirstOrDefault();

        return cart ?? new CartDto { UserId = userId, CartItems = new List<CartItemDto>() };
    }

    public IActionResult AddProductToCart(int userId, int productId, int quantity)
    {
        var cart = _context.Carts.Include(c => c.CartItems).FirstOrDefault(c => c.UserId == userId);
        if (cart == null)
        {
            cart = new Cart
            {
                UserId = userId,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };
            _context.Carts.Add(cart);
        }
        else
        {
            cart.UpdatedAt = DateTime.UtcNow;
        }

        var product = _context.Products.Find(productId);
        if (product == null)
        {
            return new BadRequestObjectResult("Product does not exist.");
        }

        if (product.StockQuantity < quantity)
        {
            return new BadRequestObjectResult("Not enough stock available.");
        }

        var cartItem = cart.CartItems.FirstOrDefault(ci => ci.ProductId == productId);
        if (cartItem != null)
        {
            return new BadRequestObjectResult("Product already exists in the cart. Please update the quantity instead.");
        }
        else
        {
            cart.CartItems.Add(new CartItem
            {
                CartId = cart.CartId,
                ProductId = productId,
                Quantity = quantity,
                Price = product.Price,
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            });
        }

        return _context.SaveChanges() > 0 ? new OkResult() : new BadRequestObjectResult("Failed to add product to the cart.");
    }

    public bool UpdateQuantity(int userId, int productId, int newQuantity)
    {
        var cart = _context.Carts.Include(c => c.CartItems).FirstOrDefault(c => c.UserId == userId);
        if (cart == null)
        {
            Console.WriteLine($"No cart found for user ID: {userId}");
            return false;
        }

        var cartItem = cart.CartItems.FirstOrDefault(ci => ci.ProductId == productId);
        if (cartItem == null)
        {
            Console.WriteLine($"No cart item found for product ID: {productId}");
            return false;
        }

        var product = _context.Products.Find(productId);
        if (product == null)
        {
            Console.WriteLine("Product does not exist.");
            return false;
        }

        if (newQuantity > product.StockQuantity)
        {
            Console.WriteLine("Requested quantity exceeds available stock.");
            return false;
        }

        if (newQuantity <= 0)
        {
            cart.CartItems.Remove(cartItem);
            Console.WriteLine($"Removed cart item with product ID: {productId}");
        }
        else
        {
            cartItem.Quantity = newQuantity;
            cartItem.UpdatedAt = DateTime.UtcNow;
            Console.WriteLine($"Updated cart item with product ID: {productId} to new quantity: {newQuantity}");
        }

        cart.UpdatedAt = DateTime.UtcNow;

        var changes = _context.SaveChanges();
        if (changes > 0)
        {
            Console.WriteLine($"Successfully updated cart for user ID: {userId}");
            return true;
        }
        else
        {
            Console.WriteLine("No changes were made to the database.");
            return false;
        }
    }

    public bool DeleteAllProductInstancesById(int userId, int productId)
    {
        var cart = _context.Carts.Include(c => c.CartItems)
            .FirstOrDefault(c => c.UserId == userId);

        if (cart == null)
        {
            Console.WriteLine($"Cart not found for user ID: {userId}");
            return false;
        }

        var cartItemsToRemove = cart.CartItems
            .Where(ci => ci.ProductId == productId)
            .ToList();

        if (!cartItemsToRemove.Any())
        {
            Console.WriteLine($"No cart items found for product ID: {productId}");
            return false;
        }

        foreach (var cartItem in cartItemsToRemove)
        {
            _context.CartItems.Remove(cartItem);
        }

        cart.UpdatedAt = DateTime.UtcNow;

        var changes = _context.SaveChanges();
        if (changes > 0)
        {
            Console.WriteLine($"Successfully removed all instances of product ID: {productId} from cart for user ID: {userId}");
            return true;
        }
        else
        {
            Console.WriteLine("No changes were made to the database.");
            return false;
        }
    }
}
