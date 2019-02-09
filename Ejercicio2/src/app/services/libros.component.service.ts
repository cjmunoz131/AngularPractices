import { Injectable, EventEmitter} from '@angular/core';
import { Ilibro } from '../model/ilibro';
@Injectable({
  providedIn: 'root'
})
export class Libros {

  libros: Array<Ilibro>

  onAgregarLibro = new EventEmitter()

  constructor(){

  }

}
