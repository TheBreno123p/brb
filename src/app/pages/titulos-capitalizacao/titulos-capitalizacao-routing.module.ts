import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitulosCapitalizacaoComponent } from './titulos-capitalizacao.component';

const routes: Routes = [
  { path: '', component: TitulosCapitalizacaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitulosCapitalizacaoRoutingModule { }
