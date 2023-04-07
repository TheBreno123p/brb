import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Transaction } from 'src/app/@core/interfaces/accounts-interface';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.scss']
})
export class EditTransactionComponent implements OnInit {

  @Input('transaction') transaction!: Transaction

  public form = this.builder.group({
    value: [0, []],
    type: [null, []],
    currency: [null, []],
    paid: [null, []],
    date: [null, []],
    category: [null, []],
    account: [null, []],
  })

  constructor(
    private builder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.set('value', this.transaction.value)
    this.set('type', this.transaction.type)
    this.set('currency', this.transaction.currency)
    this.set('paid', this.transaction.paid)
    this.set('date', this.transaction.date)
    this.set('category', this.transaction.category)
    this.set('account', this.transaction.account.description)
  }

  public set(control: string, value: any) {
    this.form.get(control)?.setValue(value)
  }

}
