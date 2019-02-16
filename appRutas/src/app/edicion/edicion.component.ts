import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-edicion',
	templateUrl: './edicion.component.html',
	styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

	idRuta: number
	item: number
	curso: string
	cantidad: number
	rol: string

	constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		//this.idRuta = Number.parseInt(this.activatedRoute.snapshot.paramMap.get("id"))
		this.activatedRoute.paramMap.subscribe(
			(parametros: any) => this.idRuta = +parametros.params.id
		);
		this.curso = this.activatedRoute.snapshot.queryParamMap.get("curso")
		this.activatedRoute.queryParamMap.subscribe(
			(parametros: any) => this.curso = parametros.params.curso
		)
		this.rol = this.activatedRoute.snapshot.fragment
		this.activatedRoute.fragment.subscribe(
			fragment => this.rol = fragment
		)
	}
	irAlRegistro(id: Number) {
		this.router.navigate(["/cursos", "edicion", id], {
			queryParams: {
				curso: "Trigonometria",
				cantidad: 50
			},
			fragment: "operador"
		})
	}
}
