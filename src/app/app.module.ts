import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ConsultaProcessoComponent } from './components/consulta-processo/consulta-processo.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CadastrarProcessoComponent } from './components/cadastrar-processo/cadastrar-processo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConsultaProcessoComponent,
    CadastrarProcessoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
