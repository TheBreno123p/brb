import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrevidenciaRoutingModule } from './previdencia-routing.module';
import { PrevidenciaComponent } from './previdencia.component';
import { EmConstrucaoModule } from '../em-construcao/em-construcao.module';


@NgModule({
  declarations: [
    PrevidenciaComponent
  ],
  imports: [
    CommonModule,
    PrevidenciaRoutingModule,
    EmConstrucaoModule
  ]
})
export class PrevidenciaModule { }
