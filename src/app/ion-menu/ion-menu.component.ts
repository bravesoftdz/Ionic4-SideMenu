import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-menu',
  templateUrl: './ion-menu.component.html',
  styleUrls: ['./ion-menu.component.scss']
})
export class IonMenuComponent implements OnInit {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];
  
  constructor() { }

  ngOnInit() {
    console.log('IonMenuComponent');    
  }

}
