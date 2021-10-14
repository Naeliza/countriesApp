import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {
  constructor(private _countryService: CountryService) { }

  search: string = '';

  countries: Country[] = [];
  countriesSuggestion: Country[] = [];

  showSuggestions: boolean = false;
  theresAnError: boolean = false;

  Search(search: string) {
    this.showSuggestions = false;
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

  suggestions(search: string) {
    this.theresAnError = false;
    this.search = search;
    this.showSuggestions = true;

    this._countryService.searchCountry(search)
      .subscribe(countries =>  this.countriesSuggestion = countries.splice(0,5)
      , (err) => this.countriesSuggestion = []);
  }

  searchSuggested(search: string)
  {
    this.Search(search);
  }
}
