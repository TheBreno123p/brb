import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosServicosComponent } from './produtos-servicos.component';

const routes: Routes = [
  { path: '', component: ProdutosServicosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosServicosRoutingModule { }
