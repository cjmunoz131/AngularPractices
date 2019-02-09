import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.class';
import { LogService } from '../log.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private logService:LogService) { }

  ngOnInit() {
    console.log("Login");
/*     console.log("Desxde Login"+this.usuarioService.estado); */
    this.logService.EscribirConsola("Cambiar el estado1","info");
    /* objUsuario.cambiarEstado(true);
    console.log(objUsuario.estado); */
  }

}
