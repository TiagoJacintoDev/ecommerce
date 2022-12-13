using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace server.Models
{
    [PrimaryKey(nameof(ProductId), nameof(UserId))]
    public class Favorite
    {
        public int ProductId { get; set; }
        public int UserId { get; set; }
        [JsonIgnore]
        public User User { get; set; }
    }
}
