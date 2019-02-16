import { Injectable, EventEmitter} from '@angular/core';
import { Ilibro } from '../model/ilibro';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libros: Array<Ilibro> = new Array<Ilibro>();

  onCambioLista: EventEmitter<Array<Ilibro>> = new EventEmitter<Array<Ilibro>>();
  constructor() {

  }

  listar(): Ilibro[] {
    return this.libros;
  }

  agregar(libro: Ilibro) {
    this.libros.push(libro);
    this.onCambioLista.emit(this.libros);
  }

  eliminar(libro: Ilibro) {
    this.libros.splice(this.libros.findIndex(element => {
      return element.id === libro.id; })
    , 1);
    this.onCambioLista.emit(this.libros);
  }

  obtenerTotal(): number {
    return this.libros.length;
  }
}
