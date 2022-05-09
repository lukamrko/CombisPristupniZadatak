import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ShowPeopleComponent } from '../show-people/show-people.component';
import { Person } from '../person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit
{
  poruka?: string;

  constructor(
    private personService: PersonService,
    public dialog: MatDialog
  ) { }

  openDialog()
  {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";

    this.dialog.open(ShowPeopleComponent, dialogConfig);
  }



  ngOnInit(): void
  {
  }


  add(firstname: string, lastname: string, email: string, mobilePhone: string, address: string): void
  {
    const person: Person = new Person(firstname, lastname, email, mobilePhone, address);
    if (!this.checkRequiredFields(person))
      return;
    if (!this.checkMail(email))
      return;
    this.personService.addPerson(person).subscribe(data =>
    {
      this.ispisiPoruku(data.message);
    });
  }


  checkRequiredFields(person: Person): boolean
  {
    if (!person.firstname)
    {
      this.ispisiPoruku("First name is required field! Please fix it and then continue!")
      return false;
    }
    if (!person.lastname)
    {
      this.ispisiPoruku("Last name is required field! Please fix it and then continue!")
      return false;
    }
    if (!person.email)
    {
      this.ispisiPoruku("Email is required field! Please fix it and then continue!")
      return false;
    }
    return true;
  }

  checkMail(email: string): boolean
  {
    let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if (regex.test(email))
      return true;
    this.ispisiPoruku("Email isn't in correct format. Please fix it and then continue!;");
    return false;
  }

  ispisiPoruku(poruka: string): void
  {
    this.poruka = poruka;
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
  }

}
