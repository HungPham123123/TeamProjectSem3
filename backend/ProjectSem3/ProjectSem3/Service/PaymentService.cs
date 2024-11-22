using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using Microsoft.EntityFrameworkCore;
using Stripe;
using System;
using System.Threading.Tasks;
using Stripe.Checkout;

namespace ProjectSem3.Service
{
    public class PaymentService
    {
        private readonly OnlineDvdsContext _context;
        private readonly string _stripeSecretKey;

        public PaymentService(OnlineDvdsContext context, IConfiguration configuration)
        {
            _context = context;
            _stripeSecretKey = configuration["Stripe:SecretKey"];
        }

        public async Task<string> CreatePaymentIntent(decimal amount, string currency = "usd")
        {
            StripeConfiguration.ApiKey = _stripeSecretKey;

            // Create the PaymentIntent
            var options = new PaymentIntentCreateOptions
            {
                Amount = (long)(amount * 100), // Convert to smallest currency unit (e.g., cents)
                Currency = currency,
                PaymentMethodTypes = new List<string> { "card" }, // You can add other methods if needed
            };

            var service = new PaymentIntentService();
            var paymentIntent = await service.CreateAsync(options);

            return paymentIntent.ClientSecret; // Return the client secret for frontend use
        }


        public async Task ConfirmPaymentAndCreateOrder(OrderDto dto, int userId, string paymentIntentId)
        {
            // Retrieve the payment intent to check its status
            var service = new PaymentIntentService();
            var paymentIntent = await service.GetAsync(paymentIntentId);

            if (paymentIntent.Status == "succeeded")
            {
                // If payment was successful, create the order with cash on delivery method
                await CreateOrderWithPaidSuccess(dto, userId);
            }
            else
            {
                throw new Exception("Payment was not successful.");
            }
        }

        public async Task<int> CreateOrderWithCashOnDelivery(OrderDto dto, int userId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserId == userId);

            if (user == null)
            {
                throw new Exception("User not found");
            }

            var payment = new Payment
            {
                PaymentMethod = "Cash On Delivery",
                PaymentStatus = "Not Paid",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.Payments.Add(payment);
            await _context.SaveChangesAsync();

            var order = new Order
            {
                UserId = userId,
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Country = dto.Country,
                City = dto.City,
                Address = dto.Address,
                Optional = dto.Optional,
                ZipCode = dto.ZipCode,
                Email = dto.Email,
                PhoneNumber = dto.PhoneNumber,
                Tax = dto.Tax,
                TotalAmount = dto.TotalAmount,
                Status = "Pending",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                PaymentId = payment.PaymentId
            };

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            var cart = await _context.Carts
                .Include(c => c.CartItems)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart != null)
            {
                foreach (var cartItem in cart.CartItems)
                {
                    var orderItem = new OrderItem
                    {
                        OrderId = order.OrderId,
                        ProductId = cartItem.ProductId,
                        Quantity = cartItem.Quantity,
                        Price = cartItem.Price
                    };

                    _context.OrderItems.Add(orderItem);
                }

                _context.CartItems.RemoveRange(cart.CartItems);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new Exception("No items in cart");
            }

            return order.OrderId; // Return the OrderId
        }


        public async Task<int> CreateOrderWithPaidSuccess(OrderDto dto, int userId)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.UserId == userId);

            if (user == null)
            {
                throw new Exception("User not found");
            }

            var payment = new Payment
            {
                PaymentMethod = "Stripe",
                PaymentStatus = "Paid",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow
            };

            _context.Payments.Add(payment);
            await _context.SaveChangesAsync();

            var order = new Order
            {
                UserId = userId,
                FirstName = dto.FirstName,
                LastName = dto.LastName,
                Country = dto.Country,
                City = dto.City,
                Address = dto.Address,
                Optional = dto.Optional,
                ZipCode = dto.ZipCode,
                Email = dto.Email,
                PhoneNumber = dto.PhoneNumber,
                Tax = dto.Tax,
                TotalAmount = dto.TotalAmount,
                Status = "Pending",
                CreatedAt = DateTime.UtcNow,
                UpdatedAt = DateTime.UtcNow,
                PaymentId = payment.PaymentId
            };

            _context.Orders.Add(order);
            await _context.SaveChangesAsync();

            var cart = await _context.Carts
                .Include(c => c.CartItems)
                .FirstOrDefaultAsync(c => c.UserId == userId);

            if (cart != null)
            {
                foreach (var cartItem in cart.CartItems)
                {
                    var orderItem = new OrderItem
                    {
                        OrderId = order.OrderId,
                        ProductId = cartItem.ProductId,
                        Quantity = cartItem.Quantity,
                        Price = cartItem.Price
                    };

                    _context.OrderItems.Add(orderItem);
                }

                _context.CartItems.RemoveRange(cart.CartItems);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new Exception("No items in cart");
            }

            return order.OrderId; // Return the OrderId
        }

    }
}
