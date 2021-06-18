import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { ByCityComponent } from "./country/pages/by-city/by-city.component";
import { ByCountryComponent } from "./country/pages/by-country/by-country.component";
import { ByRegionComponent } from "./country/pages/by-region/by-region.component";
import { LookCountryComponent } from "./country/pages/look-country/look-country.component";

const routes: Routes= 
[
{
    path: '',
    component: ByCountryComponent,
    pathMatch:'full'
},
{
    path: 'region',
    component: ByRegionComponent
},
{
    path: 'city',
    component: ByCityComponent
},
{
    path: 'country/:id',
    component: LookCountryComponent
},
{
    path: '**',
    redirectTo: ''
}
];

@NgModule({
 
    imports: [
        RouterModule.forRoot( routes )
   ],
   exports: [
       RouterModule
]
})
export class AppRoutingModule{}