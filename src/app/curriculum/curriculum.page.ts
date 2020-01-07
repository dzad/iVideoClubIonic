import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit, OnDestroy {
  listaTrabajos: {fecha: string, desc: string}[];

  constructor() {
    this.listaTrabajos = [{fecha:"2010-actualidad",desc:"Profesor del Máster Universitario en Desarrollo de Software para Dispositvos móviles."},
                          {fecha:"2015-actualidad",desc:"Professor del Máster Universitario en Desarrollo de Aplicaciones y Servicios Web"},
                          {fecha:"2008-2010", desc:"Sexador de pollos."}]
  }

  ngOnInit() {
    console.log('ngOnInit Curriculum');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter Curriculum')
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter Curriculum');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave Curriculum');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave Curriculum');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Curriculum');
  }

}
