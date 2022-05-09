import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit
{
  poruka?: string;

  constructor(private personService: PersonService) { }

  ngOnInit(): void
  {
  }

  add(firstname: string, lastname: string, email: string, mobilePhone: string, address: string): void
  {
    if (!this.checkMail(email))
      return;
    const person: Person = new Person(firstname, lastname, email, mobilePhone, address);
    this.personService.addPerson(person).subscribe(data =>
    {
      this.poruka = data.message;
      var blok = document.getElementById('porukaAlert');
      if (blok)
        blok.style.display = "block";
      setTimeout(function ()
      {
        if (blok)
          blok.style.display = "none";
        unistiPoruku();

      }, 5000);
      const unistiPoruku = () =>
      {
        this.poruka = "";
      }
    });
  }

  checkMail(email: string): boolean
  {
    return true;
  }

}
