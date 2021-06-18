import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ByCityComponent } from './pages/by-city/by-city.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { LookCountryComponent } from './pages/look-country/look-country.component';
import { RouterModule } from '@angular/router';
import { CountryTablesComponent } from './components/country-tables/country-tables.component';
import { CountryInputComponent } from './components/country-input/country-input.component';




@NgModule({
  declarations: [
    ByCityComponent,
    ByCountryComponent,
    ByRegionComponent,
    LookCountryComponent,
    CountryTablesComponent,
    CountryInputComponent],
  exports: [
    ByCityComponent,
    ByCountryComponent,
    ByRegionComponent,
    LookCountryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class CountryModule { }
