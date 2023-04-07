import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrevidenciaRoutingModule } from './previdencia-routing.module';
import { PrevidenciaComponent } from './previdencia.component';


@NgModule({
  declarations: [
    PrevidenciaComponent
  ],
  imports: [
    CommonModule,
    PrevidenciaRoutingModule
  ]
})
export class PrevidenciaModule { }
