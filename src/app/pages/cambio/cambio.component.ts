import { Component, OnInit } from '@angular/core';
import { CAMBIOS } from 'src/app/@core/data/cambio';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.scss']
})
export class CambioComponent implements OnInit {

  public loading: boolean = true

  public cambios = CAMBIOS

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

  public data = [
    {
      currency: 'USD', organizations: [
        { organization: "BRB", value: 0.16 },
        { organization: "Banco do Brasil", value: 0.18 },
        { organization: "Caixa", value: 0.19 },
      ]
    },
    {
      currency: 'JPY', organizations: [
        { organization: "BRB", value: 0.038 },
        { organization: "Banco do Brasil", value: 0.040 },
        { organization: "Caixa", value: 0.041 },
      ]
    },
    {
      currency: 'AUD', organizations: [
        { organization: "BRB", value: 0.30 },
        { organization: "Banco do Brasil", value: 0.32 },
        { organization: "Caixa", value: 0.33 },
      ]
    }
  ]

  public currency(value: number, currency: string = 'BRL'): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: currency })
  }

  exchange(value: number) {
    return Math.round(1 / value * 100) / 100
  }

  exchangeRate(value: number, currency: string = 'BRL') {
    return this.currency(this.exchange(value), currency)
  }

}
