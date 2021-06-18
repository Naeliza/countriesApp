import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-tables',
  templateUrl: './country-tables.component.html'
})
export class CountryTablesComponent implements OnInit {

  @Input() countries: Country[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
