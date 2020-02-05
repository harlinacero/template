import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [],
  imports: [
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
