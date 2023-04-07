import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartaoCreditoRoutingModule } from './cartao-credito-routing.module';
import { CartaoCreditoComponent } from './cartao-credito.component';

import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FaturaComponent } from './fatura/fatura.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';


const ZorroModules: any[] = [
  NzCardModule,
  NzCarouselModule,
  NzGridModule,
  NzStatisticModule,
  NzSpinModule,
  NzButtonModule,
  NzModalModule,
  NzIconModule,
  NzTableModule,
]

@NgModule({
  declarations: [
    CartaoCreditoComponent,
    FaturaComponent
  ],
  imports: [
    CommonModule,
    CartaoCreditoRoutingModule,
    ...ZorroModules
  ]
})
export class CartaoCreditoModule { }
