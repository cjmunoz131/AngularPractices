import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListadoLibrosComponent } from './listado-libros/listado-libros.component';
import { AgregarLibroComponent } from './agregar-libro/agregar-libro.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ItemComponent } from './item/item.component';
import { RouterModule, Route } from '@angular/router';
import { EdicionComponent } from './edicion/edicion.component'

const rutas: Route[] = [
	{
		path: "", component: LoginComponent
	},
	{
		path: "agregar", children: [
			{
				path: "", component: AgregarLibroComponent
			},
			{
				path: "listar", children: [
					{
						path: "", component: ListadoLibrosComponent
					},
					{
						path: "edicion/:index", component: EdicionComponent
					}
				]
			},
		]
	},
	/* {
		path: "agregar", component: AgregarLibroComponent
	}, */
	/* {
		path: "listar", component: ListadoLibrosComponent
	}, */
	{
		path: "**", redirectTo: ""
	}
]

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		ListadoLibrosComponent,
		AgregarLibroComponent,
		CabeceraComponent,
		ItemComponent,
		EdicionComponent
	],
	imports: [
		BrowserModule, RouterModule.forRoot(rutas)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
