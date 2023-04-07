import { Component, OnInit } from '@angular/core';
import { ACCOUNTS } from 'src/app/@core/data/accounts';
import { EXPENSES } from 'src/app/@core/data/expenses';
import { Account, TRANSACTION } from 'src/app/@core/interfaces/accounts-interface';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  groupBy = function (xs: any, key: any) {
    return xs.reduce(function (rv: any, x: any) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };


  constructor() { }

  public loading: boolean = true

  public accounts: Account[] = ACCOUNTS
  public expenses = EXPENSES

  ngOnInit() {
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

  public get totalBalance(): number {
    return this.accounts.reduce((acc, account) => acc + account.balance, 0)
  }

  public get total() {
    return {
      accounts: this.accounts.length,
      balance: this.totalBalance,
    }
  }

  public toCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  public expensesPerCategory() {
    return this.groupBy(this.expenses, 'category')
  }

  public get expense(): number {
    return this.value(TRANSACTION.EXPENSE)
  }

  public get income(): number {
    return this.value(TRANSACTION.INCOME)
  }

  public get savings(): number {
    return this.value(TRANSACTION.INCOME) - this.value(TRANSACTION.EXPENSE)
  }

  public get savingsPercentage(): string {
    return (100 - (this.value(TRANSACTION.EXPENSE) / this.value(TRANSACTION.INCOME) * 100)).toFixed(2)
  }

  public value(type: TRANSACTION): number {
    return this.expenses
      .filter(expense => expense.type == type)
      .reduce((acc: number, expense: any) => acc + expense.value, 0)

  }

}
