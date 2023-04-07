import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CambioRoutingModule } from './cambio-routing.module';
import { CambioComponent } from './cambio.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';


@NgModule({
  declarations: [
    CambioComponent
  ],
  imports: [
    CommonModule,
    CambioRoutingModule,
    NzCardModule,
    NzGridModule,
    NzSpinModule,
    NzStatisticModule,
    NzIconModule,
    NzButtonModule,
  ]
})
export class CambioModule { }
