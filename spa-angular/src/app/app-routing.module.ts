import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NovoFornecedorComponent } from './home/side-nav/novo-fornecedor/novo-fornecedor.component';
import { NovoTituloComponent } from './home/side-nav/novo-titulo/novo-titulo.component';
import { TabGroupsComponent } from './tab-groups/tab-groups.component';

const routes: Routes = [
 
  {
    path: '', redirectTo:'titulos', pathMatch: 'full'
  },

  {
    path: 'titulos',
    component:TabGroupsComponent
  },
  
  {
    path: 'novoTitulo',
    component:NovoTituloComponent
  },

  {
    path: 'novoFornecedor',
    component: NovoFornecedorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
