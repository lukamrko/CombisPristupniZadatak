import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService
{
  private personUrl = 'https://localhost:7265/People';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient)
  { }

  getPeople(): Observable<Person[]>
  {
    return this.http.get<Person[]>(this.personUrl).pipe();
  }

  addPerson(person: Person): Observable<string>
  {
    console.log(person);
    return this.http.post<string>(this.personUrl, person, this.httpOptions).pipe();
  }
}
