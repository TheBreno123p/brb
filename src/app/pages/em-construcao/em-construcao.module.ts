import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmConstrucaoRoutingModule } from './em-construcao-routing.module';
import { EmConstrucaoComponent } from './em-construcao.component';


@NgModule({
  declarations: [
    EmConstrucaoComponent
  ],
  imports: [
    CommonModule,
    EmConstrucaoRoutingModule
  ]
})
export class EmConstrucaoModule { }
