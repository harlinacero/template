import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() emitExpandSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  isExpandSidebar: boolean;
  menuIcon: string;
  account: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isExpandSidebar = false;
    this.validateSession();


  }

  validateSession() {
    this.account = localStorage.getItem('account');
    if (!(!!this.account)) {
      this.router.navigate(['/login']);
    }
    this.toggleIconMenu(this.isExpandSidebar);
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  toggleSidebar() {
    this.isExpandSidebar = !this.isExpandSidebar;
    this.toggleIconMenu(this.isExpandSidebar);
    this.emitExpandSidebar.emit(this.isExpandSidebar);
  }

  toggleIconMenu(isExapand: boolean) {
    if (isExapand) {
      this.menuIcon = 'fa fa-times';
    } else {
      this.menuIcon = 'fa fa-bars';
    }
  }

}
