import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar-panel',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {

    this.items = [
      {
        label: 'start', icon: '', items: [
          {label: 'Strona główna', icon: '', routerLink: '/admin'},
        ]
      },

      {
        label: 'Kursanci', icon: '', items: [
          {label: 'lista kursantów', routerLink: '/admin/students'},
          {label: 'dodaj kursanta', routerLink: '/admin/addStudent'}
        ]
      },
      {
        label: 'Instruktorzy', icon: '', items: []
      },
      {
        label: 'Pojazdy', icon: '', items: [
          {label: 'Lista pojazdów', icon: '', routerLink: '/admin/vehicles'}
        ]
      },

    ];

  }
}

