import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DatosService } from '../services/datos.service';

@Component({
  selector: 'app-videoclub',
  templateUrl: './videoclub.page.html',
  styleUrls: ['./videoclub.page.scss'],
})
export class VideoclubPage implements OnInit, OnDestroy{
  listaPeliculas : {
    title: string,
    year: string,
    director: string,
    poster: string,
    synopsis: string} [];

    modoLista = true;

  constructor(private router: Router, private datos: DatosService) {
    this.listaPeliculas = datos.getPeliculas();
  }

  ngOnInit() {
    console.log('ngOnInit VideoclubPage');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter VideoclubPage')
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter VideoclubPage');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave VideoclubPage');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave VideoclubPage');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy VideoclubPage');
  }

  verPaginaDetalle(id): void {
    this.router.navigate(['/detalle', id]);
  }

  cambiarVista(): void {
    this.modoLista = !this.modoLista;
  }

}
