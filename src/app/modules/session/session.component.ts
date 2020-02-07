import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  name: string;
  passpord: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.name = null;
    this.passpord = null;
  }

  validateSession() {
    if (!!this.name) {
      localStorage.setItem('account', this.name);
      this.router.navigate(['/home']);
    }
  }


}
