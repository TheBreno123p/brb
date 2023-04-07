import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmprestimoRoutingModule } from './emprestimo-routing.module';
import { EmprestimoComponent } from './emprestimo.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NgChartsModule } from 'ng2-charts';
import { NzSpinModule } from 'ng-zorro-antd/spin';


@NgModule({
  declarations: [
    EmprestimoComponent
  ],
  imports: [
    CommonModule,
    EmprestimoRoutingModule,
    NzCardModule,
    NzSpinModule,
    NgChartsModule,
  ]
})
export class EmprestimoModule { }
