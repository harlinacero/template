import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  menuItems: any[] = [
    { icon: 'fas fa-home', name: 'home' },
    { icon: 'fas fa-adjust', name: 'facturas' },
    { icon: 'fa fa-bell', name: 'compras' },
    { icon: 'fa fa-bullseye', name: 'settings' }
  ]
  constructor() { }

  ngOnInit() {
  }

}
