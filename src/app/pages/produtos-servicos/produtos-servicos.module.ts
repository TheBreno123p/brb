import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosServicosRoutingModule } from './produtos-servicos-routing.module';
import { ProdutosServicosComponent } from './produtos-servicos.component';


@NgModule({
  declarations: [
    ProdutosServicosComponent
  ],
  imports: [
    CommonModule,
    ProdutosServicosRoutingModule
  ]
})
export class ProdutosServicosModule { }
