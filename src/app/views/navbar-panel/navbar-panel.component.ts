import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar-panel',
  templateUrl: './navbar-panel.component.html',
  styleUrls: ['./navbar-panel.component.css']
})
export class NavbarPanelComponent implements OnInit{

  items: MenuItem[] = [];
  role?: string;
  displayNavbar: boolean = false;

  ngOnInit() {
    //mock assignment to role, should be taken from backend and depend on login
    this.role = "admin";
    switch (this.role){
      case "admin":
        this.items = [
          { label: 'Strona główna', icon: '', routerLink:'/'},

          { label: 'Kursanci', icon: '', items: [
              {
                label: 'lista kursantów', routerLink:'/students'
              },
              {
                label: 'dodaj kursanta', routerLink:'/addStudent'
              }
            ]
            },
          { label: 'Instruktorzy', icon: '', routerLink:''},
          { label: 'Pojazdy', icon: '', routerLink:'/vehicle-list'}
        ];
        this.displayNavbar=true;
        break;
      case "student":
        this.items = [
          { label: 'Strona główna', icon: '', routerLink:'/'},
          { label: 'Kursanci', icon: '', routerLink:'/students'},
        ];
        this.displayNavbar=true;
        break;
      default:
        this.displayNavbar=false;
        this.items = [];

    }

    console.log('admin-panel')
  }
}
