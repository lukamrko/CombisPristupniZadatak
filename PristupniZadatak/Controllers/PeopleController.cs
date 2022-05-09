using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PristupniZadatak.Data;
using PristupniZadatak.Entities;
using PristupniZadatak.Models;
using System.Diagnostics;

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
        public async Task<List<Person>> GetEverybody()
        {
            List<Person> osobe = new List<Person>();
            using (var db = new DataContext(_appSettings))
                osobe = await db.People.ToListAsync();
            return osobe;
        }

        [HttpPost]
        public async Task<Poruka> AddPerson(Person osoba)
        {
            string poruka = "Succesfully added person!";
            using (var db = new DataContext(_appSettings))
            {
                try
                {
                    await db.AddAsync(osoba);
                    await db.SaveChangesAsync();
                }
                catch (Exception ex)
                {
                    Debug.WriteLine("KONTROLER:"+ex.Message);
                    poruka = ex.Message;
                }
            }
            return new Poruka(poruka);
        }

    }
}
