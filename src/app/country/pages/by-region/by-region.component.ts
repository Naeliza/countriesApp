import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
  button {
    margin-right: 5px;
  }`
  ]
})
export class ByRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  activeRegion: string = '';
  
  constructor() { }

  getClassCSS(region : string): string
  {
    return(region === this.activeRegion)
     ? 'btn btn-primary'
     : 'btn btn-outline-primary';
  }

  activateRegion(region: string)
  {
    this.activeRegion = region;

    //TODO: HACER EL LLAMADO AL SERVICIO
  }

}
