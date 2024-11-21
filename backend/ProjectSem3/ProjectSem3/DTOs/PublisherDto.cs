namespace ProjectSem3.DTOs
{
    public class PublisherDto
    {
        public int PublisherId { get; set; }
        public string? Name { get; set; }
        public string? ContactInfo { get; set; }
    }

    public class AddPublisherDto
    {
        public string Name { get; set; }
        public string ContactInfo { get; set; }
    }

    public class UpdatePublisherDto
    {
        public string? Name { get; set; }
        public string? ContactInfo { get; set; }
    }

}
