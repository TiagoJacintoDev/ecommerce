using Newtonsoft.Json;

namespace server.Models
{
    public class Address
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public int PhoneNumber { get; set; }
        [JsonIgnore]
        public User User { get; set; }
    }
}
