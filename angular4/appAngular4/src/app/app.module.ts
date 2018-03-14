import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

import { appRoutes } from './rotas/app.routes'; //deve vir primeiro que os components


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { NotFoundComponent } from './erro/notFound.component';
import { EventosService } from './services/eventos.service';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), FormsModule],
  declarations: [AppComponent,
    MenuComponent, HomeComponent,
    CadastroComponent,
    NotFoundComponent],
  providers: [EventosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
