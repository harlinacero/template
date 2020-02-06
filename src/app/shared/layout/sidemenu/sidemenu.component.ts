import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  @Input() widthSidebar = '250px';


  menuItems: any[] = [
    { icon: 'fa fa-home', name: 'Inicio', component: 'HomeComponent' },
    { icon: 'fa fa-file-text-o', name: 'Gestión de Facturas', component: 'BillingComponent' },
    { icon: 'fa fa-shopping-cart', name: 'Órdenes de Compra', component: 'ShoppingComponent' },
    { icon: 'fa fa-users', name: 'Administración', component: 'AdminComponent' },
    { icon: 'fa fa-line-chart', name: 'Informes', component: 'ReportsComponent' },
    { icon: 'fa fa-cog', name: 'Configuración', component: 'SettingsComponent' }
  ];

  constructor() { }

  ngOnInit() {
  }



}
