using ProjectSem3.Data;
using ProjectSem3.DTOs;
using ProjectSem3.Models;
using Microsoft.EntityFrameworkCore;
using Stripe;
using System;
using System.Linq;
using System.Threading.Tasks;
using Stripe.Checkout;
using Microsoft.Extensions.Configuration;

namespace ProjectSem3.Service
{
    public class PaymentService
    {
        private readonly OnlineDvdsContext _context;
        private readonly string _stripeSecretKey;
        private readonly EmailService _emailService;

        public PaymentService(OnlineDvdsContext context, IConfiguration configuration, EmailService emailService)
        {
            _context = context;
            _stripeSecretKey = configuration["Stripe:SecretKey"];
            _emailService = emailService;
        }

        public async Task<string> CreatePaymentIntent(decimal amount, string currency = "usd")
        {
            StripeConfiguration.ApiKey = _stripeSecretKey;

            var options = new PaymentIntentCreateOptions
            {
                Amount = (long)(amount * 100), // Convert to smallest currency unit (e.g., cents)
                Currency = currency,
                PaymentMethodTypes = new List<string> { "card" },
            };

            var service = new PaymentIntentService();
            var paymentIntent = await service.CreateAsync(options);

            return paymentIntent.ClientSecret;
        }

        public async Task ConfirmPaymentAndCreateOrder(OrderDto dto, int userId, string paymentIntentId)
        {
            var service = new PaymentIntentService();
            var paymentIntent = await service.GetAsync(paymentIntentId);

            if (paymentIntent.Status == "succeeded")
            {
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

                    var product = await _context.Products.FirstOrDefaultAsync(p => p.ProductId == cartItem.ProductId);
                    if (product != null)
                    {
                        product.StockQuantity -= cartItem.Quantity;
                        if (product.StockQuantity < 0)
                        {
                            throw new Exception($"Insufficient stock for product: {product.Title}");
                        }
                    }
                }

                _context.CartItems.RemoveRange(cart.CartItems);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new Exception("No items in cart");
            }

            // Prepare order details for email
            var orderItems = await _context.OrderItems.Where(oi => oi.OrderId == order.OrderId).ToListAsync();
            var orderDetailsHtml = GenerateOrderDetailsHtml(order, orderItems);

            // Send order confirmation email with order details
            await _emailService.SendMailAsync(dto.Email, "Order Confirmation", orderDetailsHtml);

            return order.OrderId;
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

                    var product = await _context.Products.FirstOrDefaultAsync(p => p.ProductId == cartItem.ProductId);
                    if (product != null)
                    {
                        product.StockQuantity -= cartItem.Quantity;
                        if (product.StockQuantity < 0)
                        {
                            throw new Exception($"Insufficient stock for product: {product.Title}");
                        }
                    }
                }

                _context.CartItems.RemoveRange(cart.CartItems);
                await _context.SaveChangesAsync();
            }
            else
            {
                throw new Exception("No items in cart");
            }

            // Prepare order details for email
            var orderItems = await _context.OrderItems.Where(oi => oi.OrderId == order.OrderId).ToListAsync();
            var orderDetailsHtml = GenerateOrderDetailsHtml(order, orderItems);

            // Send order confirmation email with order details
            await _emailService.SendMailAsync(dto.Email, "Order Confirmation", orderDetailsHtml);

            return order.OrderId;
        }

        private string GenerateOrderDetailsHtml(Order order, List<OrderItem> orderItems)
        {
            // Start the HTML structure
            var html = $@"
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Order Confirmation</title>
    <style>
        body {{
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #fff;
            margin: 0;
            padding: 0;
        }}
        h2 {{
            color: #000;
            text-align: center;
            padding-top: 20px;
        }}
        p {{
            font-size: 16px;
            line-height: 1.6;
            color: #333;
            margin: 10px 0;
        }}
        .order-summary {{
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }}
        .order-summary th, .order-summary td {{
            text-align: left;
            padding: 8px;
        }}
        .order-summary th {{
            background-color: #000;
            color: #fff;
        }}
        .order-summary tr:nth-child(even) {{
            background-color: #f9f9f9;
        }}
        .order-summary td {{
            border-bottom: 1px solid #ddd;
        }}
        .total-amount {{
            font-size: 18px;
            font-weight: bold;
            text-align: right;
            color: #000;
        }}
        .footer {{
            text-align: center;
            margin-top: 30px;
            color: #888;
            font-size: 14px;
        }}
        .footer a {{
            color: #333;
            text-decoration: none;
        }}
    </style>
</head>
<body>
    <div class='order-summary'>
        <h2>Order Confirmation</h2>
        <p>Thank you for your order, <strong>{order.FirstName} {order.LastName}</strong>.</p>
        <p><strong>Order ID:</strong> {order.OrderId}</p>
        <p><strong>Shipping Address:</strong></p>
        <p>{order.Address}, {order.City}, {order.Country} - {order.ZipCode}</p>
        
        <p><strong>Order Summary:</strong></p>
        <table class='order-summary'>
            <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>";

            // Add order items to the email body
            foreach (var item in orderItems)
            {
                var product = _context.Products.FirstOrDefault(p => p.ProductId == item.ProductId);
                html += $@"
                <tr>
                    <td>{product?.Title}</td>
                    <td>{item.Quantity}</td>
                    <td>{item.Price:C}</td>
                </tr>";
            }

            html += $@"
        </table>
        <p class='total-amount'>Total Amount: {order.TotalAmount:C}</p>
        <p>We will notify you once your order is shipped.</p>
        <p>If you have any questions, feel free to <a href='mailto:contact@yourstore.com'>contact us</a>.</p>
    </div>

    <div class='footer'>
        <p>Thank you for shopping with us!</p>
        <p><a href='https://www.yourstore.com'>Visit our store</a></p>
    </div>
</body>
</html>";

            return html;

        }
    }
}
