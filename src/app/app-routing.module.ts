import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/dashboard' },
  { path: 'dashboard', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'expenses', loadChildren: () => import('./pages/expenses/expenses.module').then(M => M.ExpensesModule) },
  { path: 'accounts', loadChildren: () => import('./pages/accounts/accounts.module').then(M => M.AccountsModule) },

  { path: 'cartao-credito', loadChildren: () => import('./pages/cartao-credito/cartao-credito.module').then(M => M.CartaoCreditoModule) },
  { path: 'emprestimos', loadChildren: () => import('./pages/emprestimo/emprestimo.module').then(M => M.EmprestimoModule) },
  { path: 'investimentos', loadChildren: () => import('./pages/investimento/investimento.module').then(M => M.InvestimentoModule) },
  { path: 'produtos-servicos', loadChildren: () => import('./pages/produtos-servicos/produtos-servicos.module').then(M => M.ProdutosServicosModule) },
  { path: 'titulos-de-capitalizacao', loadChildren: () => import('./pages/titulos-capitalizacao/titulos-capitalizacao.module').then(M => M.TitulosCapitalizacaoModule) },
  { path: 'canbio', loadChildren: () => import('./pages/cambio/cambio.module').then(M => M.CambioModule) },
  { path: 'previdencia', loadChildren: () => import('./pages/previdencia/previdencia.module').then(M => M.PrevidenciaModule) },
  { path: 'seguros', loadChildren: () => import('./pages/seguros/seguros.module').then(M => M.SegurosModule) },

  { path: 'em-construcao', loadChildren: () => import('./pages/em-construcao/em-construcao.module').then(M => M.EmConstrucaoModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
