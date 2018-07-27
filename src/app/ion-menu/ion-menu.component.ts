import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

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
  
  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {    
  }

  logoff() {
    this.storage.remove('CurrentUser');
    this.router.navigate(['/login']);
  }

}
