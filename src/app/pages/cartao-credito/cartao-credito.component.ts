import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FaturaComponent } from './fatura/fatura.component';

@Component({
  selector: 'app-cartao-credito',
  templateUrl: './cartao-credito.component.html',
  styleUrls: ['./cartao-credito.component.scss']
})
export class CartaoCreditoComponent implements OnInit {

  public loading: boolean = true

  public cards = [
    { bank: 'Santander', bandeira: 'Mastercard', limit: Math.random() * 10000, annuity: Math.random() * 100 },
    { bank: 'Bradesco', bandeira: 'Visa', limit: Math.random() * 10000, annuity: Math.random() * 100 },
  ]

  constructor(
    private modalService: NzModalService
  ) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

  public toCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  public open(card: any) {
    this.modalService.create({
      nzContent: FaturaComponent
    })
  }

}
