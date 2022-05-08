using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PristupniZadatak.Data;
using PristupniZadatak.Entities;
using PristupniZadatak.Models;

namespace PristupniZadatak.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PeopleController : ControllerBase
    {
        private readonly IOptions<AppSettings> _appSettings;

        public PeopleController(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings;
        }

        [HttpGet]
        public async Task<ActionResult<List<Person>>> GetEverybody()
        {
            List<Person> osobe = new List<Person>();
            using (var db = new DataContext(_appSettings))
                osobe = await db.People.ToListAsync();
            return Ok(osobe);
        }

        [HttpPost]
        public async Task<ActionResult> AddPerson(Person osoba)
        {
            ActionResult ac = Ok();
            using (var db = new DataContext(_appSettings))
            {
                try
                {
                    await db.AddAsync(osoba);
                }
                catch (Exception ex)
                {
                    ac = BadRequest(ex);
                }
                await db.SaveChangesAsync();
            }
            return ac;
        }

    }
}
