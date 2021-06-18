import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor(private _http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]>
  {
    const url = `${this._apiUrl}/name/${term}`;
    return this._http.get<Country[]>(url);
    /* .pipe(
      catchError( err => of([]) )
    ); */

  }


}
