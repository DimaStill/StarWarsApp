import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleRoutingModule } from './people-routing.module';



@NgModule({
  declarations: [PeopleDetailsComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
