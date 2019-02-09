import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  nombre: string

	@Output() onLogin = new EventEmitter<string>()
	@Output() onUsuarioLogueado = new EventEmitter<string>()
  ngOnInit() {
  }

  ingresar() {
		this.onLogin.emit('libros')
		this.onUsuarioLogueado.emit(this.nombre)
  }
  capturar(valor: string) {
    console.log("el usuario es:"+this.nombre)
		this.nombre = valor
	}
}
