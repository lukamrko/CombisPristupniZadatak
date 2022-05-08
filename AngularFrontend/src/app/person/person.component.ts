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

  constructor(private personService: PersonService) { }

  ngOnInit(): void
  {
  }

  add(firstname: string, lastname: string, email: string, mobilePhone: string, address: string): void
  {
    if (!this.checkMail(email))
      return;
    const person: Person = new Person(firstname, lastname, email, mobilePhone, address);
    this.personService.addPerson(person).subscribe();
  }

  checkMail(email: string): boolean
  {
    return true;
  }

}
