import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-look-country',
  templateUrl: './look-country.component.html',
  styles: [
  ]
})
export class LookCountryComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private _countryService: CountryService) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this._countryService.getCountryByCode(id)))
      .subscribe(resp => {
        console.log(resp)
      });
  }

}
