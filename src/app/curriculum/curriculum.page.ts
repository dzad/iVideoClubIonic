import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.page.html',
  styleUrls: ['./curriculum.page.scss'],
})
export class CurriculumPage implements OnInit, OnDestroy {

  constructor() { }

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
