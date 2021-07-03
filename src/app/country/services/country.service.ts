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
  }

  searchCity(term: string): Observable<Country[]>
  {
    const url = `${this._apiUrl}/capital/${term}`;
    return this._http.get<Country[]>(url);
  }

  getCountryByCode(id: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this._http.get<Country>(url);
  }

}
