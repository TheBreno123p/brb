import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.scss']
})
export class EmprestimoComponent implements OnInit {

  public loading: boolean = true

  public message!: string

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false

      this.message = 'Success'
    }, 1000);
  }
}
