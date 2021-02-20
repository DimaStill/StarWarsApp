import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }   from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CoreModule
  ],
  exports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    CoreModule
  ]
})
export class SharedModule { }
