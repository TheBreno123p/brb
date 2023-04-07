import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmConstrucaoComponent } from './em-construcao.component';

const routes: Routes = [
  { path: '', component: EmConstrucaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmConstrucaoRoutingModule { }
