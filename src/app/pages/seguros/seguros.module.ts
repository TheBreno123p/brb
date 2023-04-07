import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SegurosRoutingModule } from './seguros-routing.module';
import { SegurosComponent } from './seguros.component';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [
    SegurosComponent
  ],
  imports: [
    CommonModule,
    SegurosRoutingModule,
    NzSpinModule,
    NzTableModule,
  ]
})
export class SegurosModule { }
