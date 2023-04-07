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

  public currency(value: number, currency: string = 'BRL'): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: currency })
  }


  exchange(value: number) {
    return Math.round(1 / value * 100) / 100
  }

  exchangeRate(value: number) {
    return this.currency(this.exchange(value))
  }

}
