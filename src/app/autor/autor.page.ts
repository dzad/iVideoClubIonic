import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit, OnDestroy {

  constructor(private router: Router) {}

  ngOnInit() {
    console.log('ngOnInit Autor');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter Autor')
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter Autor');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave Autor');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave Autor');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Autor');
  }

  abrirCurriculum(): void {
    this.router.navigate(['/curriculum']);
  }
}
