import { Component, OnInit } from '@angular/core';
import { INVESTIMENTOS } from './investimentos';

@Component({
  selector: 'app-investimento',
  templateUrl: './investimento.component.html',
  styleUrls: ['./investimento.component.scss']
})
export class InvestimentoComponent implements OnInit {

  public loading: boolean = true

  public investimentos = INVESTIMENTOS

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

  public currency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  public percentage(value: number): string {
    return value.toLocaleString('en-us', { style: 'percent' })
  }
}
