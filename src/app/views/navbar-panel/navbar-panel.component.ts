import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar-panel',
  templateUrl: './navbar-panel.component.html',
  styleUrls: ['./navbar-panel.component.css']
})
export class NavbarPanelComponent implements OnInit{

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Strona główna', icon: '', routerLink:'/'},
      { label: 'Kursanci', icon: '', routerLink:'/students'},
      { label: 'Instruktorzy', icon: '', routerLink:''},
      { label: 'Pojazdy', icon: '', routerLink:'/vehicle-list'}
    ];
    console.log('admin-panel')
  }
}
