import { Component, OnInit } from '@angular/core';
import { PRODUTOS } from './produtos';

@Component({
  selector: 'app-produtos-servicos',
  templateUrl: './produtos-servicos.component.html',
  styleUrls: ['./produtos-servicos.component.scss']
})
export class ProdutosServicosComponent implements OnInit {

  public loading: boolean = true

  public produtos = PRODUTOS

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
