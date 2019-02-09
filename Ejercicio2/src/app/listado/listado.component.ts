import { Component, OnInit } from '@angular/core';
import { Ilibro } from '../model/ilibro';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  libros: Array<Ilibro> = [
		{ id: 1, titulo: "Miss Bala",anno: 2019 },
		{ id: 2, titulo: "Artic",  anno: 2018 },
		{ id: 3, titulo: "Ek Ladki Ko Dekha Toh Aisa Laga", anno: 2019 },
		{ id: 4, titulo: "Aquaman", anno: 2018 },
		{ id: 5, titulo: "Spider-Man: Un nuevo universo", anno: 2018 },
		{ id: 6, titulo: "Dragon Ball Super: Broly",anno: 2018 },
		{ id: 7, titulo: "Upside", anno: 2017 }
  ]

}
