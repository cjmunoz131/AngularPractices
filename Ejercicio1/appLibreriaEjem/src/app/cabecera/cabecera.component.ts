import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  @Output() onCerrar = new EventEmitter<string>()

	@Input() correoUsuario: string

  ngOnInit() {
  }

  cerrar(){
    this.onCerrar.emit("login");
  }

}
