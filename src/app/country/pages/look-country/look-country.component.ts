import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-look-country',
  templateUrl: './look-country.component.html',
  styles: [
  ]
})
export class LookCountryComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute, private _countryService: CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this._countryService.getCountryByCode(id)),
        tap(console.log)) //Imprime lo que recibe al hacer el switchMap porque tap se mantiene oyendo los cambios
      .subscribe(country => this.country = country );
  }

}
