import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosServicosRoutingModule } from './produtos-servicos-routing.module';
import { ProdutosServicosComponent } from './produtos-servicos.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [
    ProdutosServicosComponent
  ],
  imports: [
    CommonModule,
    ProdutosServicosRoutingModule,
    NzTableModule,
    NzSpinModule,
  ]
})
export class ProdutosServicosModule { }
