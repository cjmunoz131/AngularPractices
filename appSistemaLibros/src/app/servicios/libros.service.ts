import { Injectable, EventEmitter } from '@angular/core';
import { ILibro } from '../modelos/libro.interface';

@Injectable({
	providedIn: 'root'
})
export class LibrosService {

	private libros: ILibro[] = []
	private libroActualizar: ILibro

	onActualizacionCantidad: EventEmitter<number> = new EventEmitter<number>()
	onCambioLibros: EventEmitter<any> = new EventEmitter<any>()

	constructor() { }

	listar(): ILibro[] {
		return this.libros
	}

	insertar(libro: ILibro) {
		this.libros.push(libro)
		this.onActualizacionCantidad.emit(this.libros.length)
		this.onCambioLibros.emit()
	}

	obtenerCantidad(): number {
		return this.libros.length
	}

	eliminar(posicion: number) {
		this.libros.splice(posicion, 1)

		this.onActualizacionCantidad.emit(this.libros.length)
		this.onCambioLibros.emit()
	}

	actualizar(posicion: number) {
		this.libroActualizar = this.libros.find(
			(element, index) => {
				return index === posicion;
			}
		)
	}
	obtenerItemUpdate() {
		return this.libroActualizar;
	}

	updateConfirm(titulo: string) {
		console.log("El titulo es:" + titulo)
		this.libroActualizar.titulo = titulo
	}
}
