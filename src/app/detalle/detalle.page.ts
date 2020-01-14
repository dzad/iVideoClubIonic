import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasAPIService } from '../services/peliculas-api.service';

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

  constructor(private activatedRoute: ActivatedRoute,private peliculasAPI: PeliculasAPIService) {
  }

  ngOnInit(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.peliculasAPI.getPelicula(id).subscribe(
      result => {
        this.pelicula = result;
      },
      err => {
        console.log(err);
     }
    );
  }

}
