import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BillingComponent } from './billing/billing.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { AdminComponent } from './admin/admin.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';



@NgModule({
  declarations: [HomeComponent, BillingComponent, ShoppingComponent, AdminComponent, ReportsComponent, SettingsComponent],
  imports: [
    CommonModule
  ],
  exports: [HomeComponent, BillingComponent, ShoppingComponent, AdminComponent, ReportsComponent, SettingsComponent]
})
export class ModulesModule { }
