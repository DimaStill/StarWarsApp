import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsDetailsComponent } from './planets/planets-details/planets-details.component';
import { PlanetsComponent } from './planets/planets.component';

const routes: Routes = [
  {
    path: '', component: PlanetsComponent
  },
  {
    path: 'details', component: PlanetsDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }
