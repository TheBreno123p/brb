import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { EXPENSES } from 'src/app/@core/data/expenses';
import { TRANSACTION, Transaction } from 'src/app/@core/interfaces/accounts-interface';
import { EditTransactionComponent } from './edit-transaction/edit-transaction.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  public filters: String[] = [
    'Hoje',
    'Essa semana',
    'Esse Mês'
  ]

  public expenses = EXPENSES

  public types = TRANSACTION

  public loading: boolean = true;

  constructor(
    private modalService: NzModalService
  ) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

  public value(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  public icon(transaction: Transaction): string {
    return transaction.paid ? 'check' : 'close'
  }

  public expenseIcon(transaction: Transaction): string {
    return transaction.type == TRANSACTION.EXPENSE ? 'arrow-down' : 'arrow-up'
  }

  onClick(event: any) {
    this.loading = true

    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

  onEdit(transaction: Transaction) {
    this.modalService.create({
      nzContent: EditTransactionComponent,
      nzComponentParams: {
        transaction: transaction
      },
    })
  }

  onDelete(transaction: Transaction) {
    this.loading = true

    setTimeout(() => {
      this.expenses = this.expenses.filter(expense => expense.id != transaction.id)

      this.loading = false
    }, 1000);
  }
}
