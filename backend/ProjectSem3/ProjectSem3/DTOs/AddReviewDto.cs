namespace ProjectSem3.DTOs
{
    public class AddReviewDto
    {
        public int ProductId { get; set; }
        public decimal Rating { get; set; }
        public string Comment { get; set; }
    }

}
