import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsComponent } from './planets/planets.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { PlanetRoutingModule } from './planet-routing.module';
import { PlanetsItemComponent } from './planets/planets-item/planets-item.component';



@NgModule({
  declarations: [PlanetsComponent, PlanetsItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    PlanetRoutingModule
  ]
})
export class PlanetModule { }
