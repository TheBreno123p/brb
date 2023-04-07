import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartaoCreditoComponent } from './cartao-credito.component';

const routes: Routes = [
  { path: '', component: CartaoCreditoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartaoCreditoRoutingModule { }
