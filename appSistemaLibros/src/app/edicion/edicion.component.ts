import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../servicios/libros.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

	titulo: string
	tituloModificar: string
	indice: number
	constructor(private activatedRoute: ActivatedRoute, private librosService: LibrosService, private router: Router) { }

	ngOnInit() {

		this.activatedRoute.queryParamMap.subscribe(
			(parametros: any) => {
				this.titulo = parametros.params.titulo
				this.indice = +parametros.params.indice;
			}
		);
	}

	update() {
		this.librosService.updateConfirm(this.tituloModificar);
		this.router.navigate(["/agregar/listar"])
	}

	cancel() {
		this.router.navigate(["/agregar/listar"])
	}

	capturar(valor: string) {
		this.tituloModificar = valor;
	}

}
