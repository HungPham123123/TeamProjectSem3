using Microsoft.AspNetCore.Mvc;
using ProjectSem3.DTOs;
using ProjectSem3.Service;
using System.Security.Claims;
using System.Threading.Tasks;

namespace ProjectSem3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private readonly PaymentService _paymentService;

        public PaymentController(PaymentService paymentService)
        {
            _paymentService = paymentService;
        }


        [HttpPost("create-payment-intent")]
        public async Task<IActionResult> CreatePaymentIntent([FromBody] PaymentRequestDto paymentRequestDto)
        {
            try
            {
                decimal totalAmount = paymentRequestDto.totalAmount;

                // Now create the payment intent
                var clientSecret = await _paymentService.CreatePaymentIntent(totalAmount);

                return Ok(new { clientSecret });
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("confirm-payment-and-create-order")]
        public async Task<IActionResult> ConfirmPaymentAndCreateOrder([FromBody] OrderDto orderDto, [FromQuery] string paymentIntentId)
        {
            var userIdClaim = User.FindFirst("UserId")?.Value;

            if (string.IsNullOrEmpty(userIdClaim))
            {
                return Unauthorized("User is not authenticated");
            }

            int userId = int.Parse(userIdClaim);

            try
            {
                await _paymentService.ConfirmPaymentAndCreateOrder(orderDto, userId, paymentIntentId);
                return Ok("Order created successfully");
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }

        [HttpPost("create-order-cash-on-delivery")]
        public async Task<IActionResult> CreateOrderWithCashOnDelivery(OrderDto orderDto)
        {
            var userIdClaim = User.FindFirst("UserId")?.Value;

            if (string.IsNullOrEmpty(userIdClaim))
            {
                return Unauthorized("User is not authenticated");
            }

            int userId = int.Parse(userIdClaim);

            try
            {
                await _paymentService.CreateOrderWithCashOnDelivery(orderDto, userId);
                return Ok("Order created successfully with Cash on Delivery");
            }
            catch (Exception ex)
            {
                return BadRequest(new { message = ex.Message });
            }
        }
    }
}
