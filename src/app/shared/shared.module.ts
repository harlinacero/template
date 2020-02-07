import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TablesComponent } from './components/tables/tables.component';

@NgModule({
  declarations: [TablesComponent],
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    LayoutModule,
    MatSidenavModule,
    RouterModule
  ],
  exports: [
    LayoutModule,
    MatSidenavModule,
    TablesComponent
  ]
})
export class SharedModule { }
