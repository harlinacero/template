import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'template';
  widthSidebar: string;
  account: string;

  ngOnInit(): void {
    this.widthSidebar = '50px';
    this.account = localStorage.getItem('account');
  }


  toggleSidebar(event) {
    if (event) {
      this.widthSidebar = '250px';
    } else {
      this.widthSidebar = '50px';
    }
  }


}
