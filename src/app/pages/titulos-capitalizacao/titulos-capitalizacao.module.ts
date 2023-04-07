import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitulosCapitalizacaoRoutingModule } from './titulos-capitalizacao-routing.module';
import { TitulosCapitalizacaoComponent } from './titulos-capitalizacao.component';


@NgModule({
  declarations: [
    TitulosCapitalizacaoComponent
  ],
  imports: [
    CommonModule,
    TitulosCapitalizacaoRoutingModule
  ]
})
export class TitulosCapitalizacaoModule { }
