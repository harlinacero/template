import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() emitExpandSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  isExpandSidebar = true;


  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.isExpandSidebar = !this.isExpandSidebar;
    this.emitExpandSidebar.emit(this.isExpandSidebar);
  }

}
