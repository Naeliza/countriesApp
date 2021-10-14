import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private _apiUrl: string = 'https://restcountries.com/v2/';
  
  get httpParams()
  {
    return  new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population' );
  }

  constructor(private _http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]>
  {
    const url = `${this._apiUrl}/name/${term}`;
    return this._http.get<Country[]>(url, {params: this.httpParams});
  }

  searchCity(term: string): Observable<Country[]>
  {
    const url = `${this._apiUrl}/capital/${term}`;
    return this._http.get<Country[]>(url, {params: this.httpParams});
  }

  searchRegion(term: string): Observable<Country[]>
  {
    const url = `${this._apiUrl}/region/${term}`;
    return this._http.get<Country[]>(url, { params: this.httpParams})
    .pipe(
      tap(console.log)
    )
  }

  getCountryByCode(id: string): Observable<Country> {
    const url = `${this._apiUrl}/alpha/${id}`;
    return this._http.get<Country>(url);
  }

}
