using Newtonsoft.Json;

namespace server.Models
{
    public class BoughtProduct
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int ProductId { get; set; }
        public int SubTotal { get; set; }
        public string SelectedAddress { get; set; }
        public string Shipping { get; set; }
        public string Date { get; set; }
        [JsonIgnore]
        public User User { get; set; }
    }
}
