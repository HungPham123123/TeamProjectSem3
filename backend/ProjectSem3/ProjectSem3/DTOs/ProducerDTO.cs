namespace ProjectSem3.DTOs
{
    public class ProducerDto
    {
        public int ProducerId { get; set; }
        public string Name { get; set; }
        public string ContactInfo { get; set; }
    }

    public class AddProducerDto
    {
        public string Name { get; set; }
        public string ContactInfo { get; set; }
    }

    public class UpdateProducerDto
    {
        public string Name { get; set; }
        public string ContactInfo { get; set; }
    }

}
