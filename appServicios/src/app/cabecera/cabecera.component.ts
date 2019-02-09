import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.class';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor(private usuarioService : Usuario) {

  }

  ngOnInit() {
    this.usuarioService.cambiarEstado(true);
    /*const actividadUsuario = new Usuario(); */
    console.log("Desde Cabecera"+this.usuarioService.estado);
  }

}
