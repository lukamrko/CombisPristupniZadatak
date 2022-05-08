using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using PristupniZadatak.Entities;
using PristupniZadatak.Models;

namespace PristupniZadatak.Data
{
    public class DataContext:DbContext
    {
        private readonly IOptions<AppSettings> _appSettings;

        public DataContext(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings;
        }

        public DbSet<Person>? People { get; set; }


        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder)
        {

            dbContextOptionsBuilder.UseSqlite($"Data Source={this._appSettings.Value.DbName}");
        }

    }
}
