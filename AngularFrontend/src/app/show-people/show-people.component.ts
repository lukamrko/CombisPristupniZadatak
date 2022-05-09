import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonService } from '../person.service';
import { Observable } from 'rxjs';
import { Person } from '../person';

@Component({
  selector: 'app-show-people',
  templateUrl: './show-people.component.html',
  styleUrls: ['./show-people.component.css']
})
export class ShowPeopleComponent implements OnInit
{
  kontaktiUcitani: boolean;
  people?: Observable<any[]>

  constructor(
    private personService: PersonService
  )
  {
    this.kontaktiUcitani = false;
  }

  ngOnInit(): void
  {
    this.ucitajKorsnike();
  }

  ucitajKorsnike(): void
  {
    this.people = this.personService.getPeople();
    this.kontaktiUcitani = true;
  }

}
