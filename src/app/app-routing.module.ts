import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'planets', pathMatch: 'full'
  },
  {
    path: 'planets', loadChildren: () => import('./modules/planets/planet.module').then(m => m.PlanetModule)
  },
  {
    path: 'resident', loadChildren: () => import('./modules/people/people.module').then(m => m.PeopleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
