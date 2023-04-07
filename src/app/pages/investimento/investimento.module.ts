import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestimentoRoutingModule } from './investimento-routing.module';
import { InvestimentoComponent } from './investimento.component';


@NgModule({
  declarations: [
    InvestimentoComponent
  ],
  imports: [
    CommonModule,
    InvestimentoRoutingModule
  ]
})
export class InvestimentoModule { }
