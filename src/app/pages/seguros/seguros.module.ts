import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegurosRoutingModule } from './seguros-routing.module';
import { SegurosComponent } from './seguros.component';


@NgModule({
  declarations: [
    SegurosComponent
  ],
  imports: [
    CommonModule,
    SegurosRoutingModule
  ]
})
export class SegurosModule { }
