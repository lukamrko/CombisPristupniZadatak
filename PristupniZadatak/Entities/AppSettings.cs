namespace PristupniZadatak.Entities
{
    public class AppSettings
    {
        public const string SectionName = "AppSettings";
        public string? DbName { get; set; }
        public string? AngularOrigin { get; set; }

    }
}
