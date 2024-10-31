using Microsoft.Extensions.Configuration;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace ProjectSem3.Service
{
    public class EmailService
    {
        private readonly string _smtpHost;
        private readonly int _smtpPort;
        private readonly string _smtpUser;
        private readonly string _smtpPass;

        public EmailService(IConfiguration configuration)
        {
            // Read SMTP settings from configuration
            _smtpHost = configuration["SmtpSettings:Host"];
            _smtpPort = int.Parse(configuration["SmtpSettings:Port"]);
            _smtpUser = configuration["SmtpSettings:User"];
            _smtpPass = configuration["SmtpSettings:Password"]; // Consider secure handling for this
        }

        public async Task SendMailAsync(string toEmail, string subject, string body)
        {
            using (var message = new MailMessage())
            {
                message.From = new MailAddress(_smtpUser);
                message.To.Add(toEmail);
                message.Subject = subject;
                message.Body = body;
                message.IsBodyHtml = true; // Set to true if the body contains HTML

                using (var client = new SmtpClient(_smtpHost, _smtpPort))
                {
                    client.EnableSsl = true; // Enable SSL
                    client.Credentials = new NetworkCredential(_smtpUser, _smtpPass);

                    try
                    {
                        await client.SendMailAsync(message);
                    }
                    catch (SmtpException smtpEx)
                    {
                        // Log or handle the SMTP exception
                        throw new Exception($"SMTP Error: {smtpEx.Message}");
                    }
                    catch (Exception ex)
                    {
                        // Log or handle the generic exception
                        throw new Exception($"An error occurred while sending email: {ex.Message}");
                    }
                }
            }
        }
    }
}
