using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Models;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BoughtProductsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public BoughtProductsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/BoughtProducts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BoughtProduct>>> GetBoughtProduct()
        {
            return await _context.BoughtProduct.ToListAsync();
        }

        // GET: api/BoughtProducts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BoughtProduct>> GetBoughtProduct(int id)
        {
            var boughtProduct = await _context.BoughtProduct.FindAsync(id);

            if (boughtProduct == null)
            {
                return NotFound();
            }

            return boughtProduct;
        }

        // PUT: api/BoughtProducts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBoughtProduct(int id, BoughtProduct boughtProduct)
        {
            if (id != boughtProduct.Id)
            {
                return BadRequest();
            }

            _context.Entry(boughtProduct).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BoughtProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BoughtProducts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BoughtProduct>> PostBoughtProduct(BoughtProduct boughtProduct)
        {
            _context.BoughtProduct.Add(boughtProduct);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBoughtProduct", new { id = boughtProduct.Id }, boughtProduct);
        }

        // DELETE: api/BoughtProducts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBoughtProduct(int id)
        {
            var boughtProduct = await _context.BoughtProduct.FindAsync(id);
            if (boughtProduct == null)
            {
                return NotFound();
            }

            _context.BoughtProduct.Remove(boughtProduct);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BoughtProductExists(int id)
        {
            return _context.BoughtProduct.Any(e => e.Id == id);
        }
    }
}
