import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LibrosService } from '../services/libros.component.service';
import { Ilibro } from '../model/ilibro';
@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor(private librosService: LibrosService) { }

  suscripcion: Subscription;
  lstLibros: Array<Ilibro>;
  ngOnInit() {
    this.suscripcion = this.librosService.onCambioLista.subscribe(
      libros => this.lstLibros = libros
    );
  }
  eliminar() {

  }
 }
