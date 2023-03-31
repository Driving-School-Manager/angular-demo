import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'osk-front-demo';
  showMenu: boolean = false;

  constructor(private router: Router){
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        this.showMenu = event.url !== '/'
      }
    });
  }


}
