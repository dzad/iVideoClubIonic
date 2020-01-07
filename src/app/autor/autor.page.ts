import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.page.html',
  styleUrls: ['./autor.page.scss'],
})
export class AutorPage implements OnInit, OnDestroy {

  autor: {
    name: string,
    email: string,
    twitter: string,
    phone: string
  };
  mailto:string;
  twitterProfile:string;
  telTo:string;

  constructor(private router: Router) {
    this.autor = {name: "ZAYD", email: "mekhaznizayd@gmail.com", twitter: "mekhaznizayd", phone: "698556331"};
    this.mailto = "mailto:"+this.autor.email;
    this.twitterProfile = "https://twitter.com/"+this.autor.twitter;
    this.telTo = "tel:"+this.autor.phone;
  }

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
