import { Component, OnInit } from '@angular/core';
import { ACCOUNTS } from 'src/app/@core/data/accounts';
import { Account } from 'src/app/@core/interfaces/accounts-interface';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  public accounts: Account[] = ACCOUNTS

  public loading: boolean = true

  public random = Math.random()

  ngOnInit() {
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

  public currency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  public expected(value: number): string {
    value *= this.random + 1

    return this.currency(value)
  }

  public get totalBalance() {
    return this.accounts.reduce((acc, account) => acc + account.balance, 0)
  }

  public get total() {
    return {
      accounts: this.accounts.length,
      balance: this.totalBalance,
    }
  }

}
