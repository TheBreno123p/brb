import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CambioRoutingModule } from './cambio-routing.module';
import { CambioComponent } from './cambio.component';


@NgModule({
  declarations: [
    CambioComponent
  ],
  imports: [
    CommonModule,
    CambioRoutingModule
  ]
})
export class CambioModule { }
