import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../services/libros.component.service';
import { Ilibro } from '../model/ilibro';


@Component({
  selector: 'app-adicionarlibro',
  templateUrl: './adicionarlibro.component.html',
  styleUrls: ['./adicionarlibro.component.css']
})
export class AdicionarlibroComponent implements OnInit {

  constructor(private librosService: LibrosService) { }
  titulo: string;
  ngOnInit() {
  }
  adicionar() {
    if (this.titulo.trim() !== '') {
      const lib: Ilibro = {
        id: null,
        titulo: this.titulo,
        anno: null};
      this.librosService.agregar(lib);
    }
  }
  capturar(valor: string) {
    this.titulo = valor;
  }
}
