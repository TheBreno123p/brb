import { Component, OnInit } from '@angular/core';
import { SEGUROS } from 'src/app/@core/data/seguros';
import { InsuranceType, Seguro } from 'src/app/@core/interfaces/seguros-interface';

@Component({
  selector: 'app-seguros',
  templateUrl: './seguros.component.html',
  styleUrls: ['./seguros.component.scss']
})
export class SegurosComponent implements OnInit {

  public loading: boolean = true

  public seguros = SEGUROS

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false
    }, 1000);
  }

  public currency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

}
