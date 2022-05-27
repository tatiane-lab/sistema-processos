import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConsultaProcessoComponent } from './components/consulta-processo/consulta-processo.component';
import { CadastrarProcessoComponent } from './components/cadastrar-processo/cadastrar-processo.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'consultarProcesso', component: ConsultaProcessoComponent },
  { path: 'cadastrarProcesso', component: CadastrarProcessoComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
