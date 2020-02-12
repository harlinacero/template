import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sessionervice } from './session.service';
import { AccountInterface } from 'src/app/shared/interfaces/services.interface';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit {
  userName: string;
  password: string;
  intentos = 0;

  constructor(private router: Router, private sessionService: Sessionervice) { }

  ngOnInit() {

  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault();
    this.sessionService.login(username, password).subscribe(res => {
      console.log(res);
    });

  }

  navigate() {
    this.router.navigateByUrl('/home');
  }


}

