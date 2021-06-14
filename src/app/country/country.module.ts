import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCityComponent } from './pages/by-city/by-city.component';
import { ByCountryComponent } from './pages/by-country/by-country.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { LookCountryComponent } from './pages/look-country/look-country.component';



@NgModule({
  declarations: [
    ByCityComponent,
    ByCountryComponent,
    ByRegionComponent,
    LookCountryComponent],
  exports: [
    ByCityComponent,
    ByCountryComponent,
    ByRegionComponent,
    LookCountryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CountryModule { }
