import { LogService } from './log.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn :"root"
}
)
export class Usuario {
  estado: boolean = false
  constructor(private logService :LogService){

  }
  cambiarEstado(estadoUsuario: boolean){
    this.logService.EscribirConsola("Estado Cambiado","error");
    this.estado = estadoUsuario;
  }
}
