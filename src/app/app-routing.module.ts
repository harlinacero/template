import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillingComponent } from './modules/billing/billing.component';
import { HomeComponent } from './modules/home/home.component';
import { AdminComponent } from './modules/admin/admin.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { ShoppingComponent } from './modules/shopping/shopping.component';
import { ReportsComponent } from './modules/reports/reports.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  }, {
    path: 'shopping',
    component: ShoppingComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }, {
    path: 'reports',
    component: ReportsComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'not-found',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




// {
//   path: 'home',
//   loadChildren: () => import('./modules/home/home.component').then(m => m.HomeComponent)
// },
// {
//   path: 'billing',
//   loadChildren: () => import('./modules/billing/billing.component').then(m => m.BillingComponent)
// }, {
//   path: 'shopping',
//   loadChildren: () => import('./modules/shopping/shopping.component').then(m => m.ShoppingComponent)
// }, {
//   path: 'admin',
//   loadChildren: () => import('./modules/admin/admin.component').then(m => m.AdminComponent)
// },
// {
//   path: 'reports',
//   loadChildren: () => import('./modules/reports/reports.component').then(m => m.ReportsComponent)
// },
// {
//   path: 'settings',
//   loadChildren: () => import('./modules/settings/settings.component').then(m => m.SettingsComponent)
// },
// {
//   path: 'not-found',
//   loadChildren: () => import('./modules/home/home.component').then(m => m.HomeComponent)
// },
