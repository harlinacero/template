import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'template';
  showFiller = false;
  widthSidebar = '250px';


  toggleSidebar(event) {
    if (event) {
      this.widthSidebar = '250px';
    } else {
      this.widthSidebar = '50px';
    }
  }


}
