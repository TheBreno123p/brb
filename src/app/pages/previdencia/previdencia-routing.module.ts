import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrevidenciaComponent } from './previdencia.component';

const routes: Routes = [
  { path: '', component: PrevidenciaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrevidenciaRoutingModule { }
