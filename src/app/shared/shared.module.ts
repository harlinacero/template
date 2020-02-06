import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
  
@NgModule({
  declarations: [],
  imports: [
    AngularFontAwesomeModule,
    CommonModule,
    LayoutModule,
    MatSidenavModule
  ],
  exports:[
    LayoutModule,
    MatSidenavModule
  ]
})
export class SharedModule { }
