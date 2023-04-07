import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestimentoRoutingModule } from './investimento-routing.module';
import { InvestimentoComponent } from './investimento.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';


@NgModule({
  declarations: [
    InvestimentoComponent
  ],
  imports: [
    CommonModule,
    InvestimentoRoutingModule,
    NzTableModule,
    NzSpinModule,
  ]
})
export class InvestimentoModule { }
