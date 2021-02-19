import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }   from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatCardModule,
    MatIconModule
  ]
})
export class SharedModule { }
