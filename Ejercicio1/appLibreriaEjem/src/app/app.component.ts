import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appLibreriaEjem';
  vistaAMostrar: string = "home"


  cambiarVista(vista: string) {
		this.vistaAMostrar = vista
	}
}
