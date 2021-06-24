import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {
  constructor(private _countryService: CountryService) { }

  search: string = '';

  countries: Country[] = [];

  theresAnError: boolean = false;

  Search(search: string) {
    this.theresAnError = false;
    this.search = search;
    
    this._countryService.searchCountry(this.search)
      .subscribe(resp => {
        this.countries = resp;
        console.log(this.countries);
        /*         this.search = ''; */
      }, (err) => {
        this.theresAnError = true;
        this.countries = [];
      });
  }

  suggestions(search: string)
  {
    this.theresAnError = false;
    //CREAR SUGERENCIAS
  }



}
