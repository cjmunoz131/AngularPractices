import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ejercicio2';
  vistaAMostrar: string = "login"
  nombreUsuario: string;

  cambiarVista(vista: string) {
    this.vistaAMostrar = vista
  }




}


