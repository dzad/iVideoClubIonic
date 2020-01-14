import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  pelicula : {
    title: string,
    year: string,
    director: string,
    poster: string,
    synopsis: string};

  miDatos: DatosService;

  constructor(private activatedRoute: ActivatedRoute,private datos: DatosService) {
    this.miDatos = datos;
  }

  ngOnInit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id = "+id);
    this.pelicula = this.miDatos.getPelicula(id);
  }

}
