import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { EdicionLibroComponent } from './edicion-libro/edicion-libro.component';
import { HomeComponent } from './home/home.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    EdicionLibroComponent,
    HomeComponent,
    ListadoLibrosComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
