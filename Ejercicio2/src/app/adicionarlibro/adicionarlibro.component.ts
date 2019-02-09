import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-adicionarlibro',
  templateUrl: './adicionarlibro.component.html',
  styleUrls: ['./adicionarlibro.component.css']
})
export class AdicionarlibroComponent implements OnInit {

  constructor() { }
  suscripcion: Subscription
  ngOnInit() {
  }


  adicionar(){
    this.suscripcion = this.listado.onCambioEstadoUsuario.subscribe(
      estado => this.estadoDelUsuario = estado
    )
  }

}
