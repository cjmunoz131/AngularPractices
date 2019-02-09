import { Component, OnInit , Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Output() onCerrar = new EventEmitter<string>()

	@Input() nombreUsuario: string

	constructor() { }

	ngOnInit() {
	}

	cerrar() {
		this.onCerrar.emit("login")
	}
}
