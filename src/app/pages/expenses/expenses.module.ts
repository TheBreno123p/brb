import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component'
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCardModule } from 'ng-zorro-antd/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';




@NgModule({
  declarations: [
    ExpensesComponent,
    EditTransactionComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
    NzSpinModule,
    NzSwitchModule,
    NzSwitchModule,
    NzRadioModule,
    NzButtonModule,
    NzModalModule,
    NzCardModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
  ]
})
export class ExpensesModule { }
