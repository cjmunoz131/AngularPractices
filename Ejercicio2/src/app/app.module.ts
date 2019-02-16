import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListadoComponent } from './listado/listado.component';
import { AdicionarlibroComponent } from './adicionarlibro/adicionarlibro.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LibrosService } from './services/libros.component.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListadoComponent,
    AdicionarlibroComponent,
    CabeceraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
