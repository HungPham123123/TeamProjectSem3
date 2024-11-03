namespace ProjectSem3.DTOs
{
    public class ResetPasswordDto
    {
        public string VerificationToken { get; set; }

        public string NewPassword { get; set; }

        public string ConfirmPassword { get; set; }
    }
}
