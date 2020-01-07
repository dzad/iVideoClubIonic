import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{

  ngOnInit() {
    console.log('ngOnInit home');
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter home')
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter home');
  }
  ionViewWillLeave() {
    console.log('ionViewWillLeave home');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave home');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy home');
  }

  constructor(private router: Router) {}

  abrirVideoClub(): void {
    this.router.navigate(['/videoclub']);
  }

  abrirAutor(): void {
    this.router.navigate(['/autor']);
  }
}
