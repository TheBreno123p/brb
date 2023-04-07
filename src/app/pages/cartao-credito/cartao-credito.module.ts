import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaoCreditoRoutingModule } from './cartao-credito-routing.module';
import { CartaoCreditoComponent } from './cartao-credito.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzSpinModule } from 'ng-zorro-antd/spin';


const ZorroModules: any[] = [
  NzCardModule,
  NzCarouselModule,
  NzGridModule,
  NzStatisticModule,
  NzSpinModule,
]

@NgModule({
  declarations: [
    CartaoCreditoComponent
  ],
  imports: [
    CommonModule,
    CartaoCreditoRoutingModule,
    ...ZorroModules
  ]
})
export class CartaoCreditoModule { }
