import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidemenuComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    SidemenuComponent
  ]
})
export class LayoutModule { }
