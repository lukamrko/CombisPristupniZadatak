using System.ComponentModel.DataAnnotations;

namespace PristupniZadatak.Models
{
    public class Person
    {
        public string Firstname { get; set; }= string.Empty;
        public string Lastname { get; set; } = string.Empty;

        [Key]
        public string Email { get; set; } = string.Empty;
        public string Mobilephone { get; set; } = string.Empty;
        public string Address { get; set; } = string.Empty;

        public Person(string firstname, string lastname, string email, string mobilphone, string address)
        {
            Firstname = firstname;
            Lastname = lastname;
            Email = email;
            Mobilephone = mobilphone;
            Address = address;
        }

        public Person()
        { }
    }
}
