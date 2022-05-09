import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import launchSettingsJson from '../../../PristupniZadatak/Properties/launchSettings.json';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class PersonService
{
  private personUrl = this.loadUrl();

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient)
  { }

  getPeople(): Observable<Person[]>
  {
    return this.http.get<Person[]>(this.personUrl).pipe();
  }

  addPerson(person: Person): Observable<any>
  {
    return this.http.post<string>(this.personUrl, person);
  }

  loadUrl(): string
  {
    var allURLs: string = launchSettingsJson.profiles.PristupniZadatak.applicationUrl;
    let URLs: string[] = allURLs.split(';');
    return URLs[0] + '/People';
  }
}
