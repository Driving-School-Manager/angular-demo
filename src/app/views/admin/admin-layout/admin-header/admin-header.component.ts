import { Component } from '@angular/core';
import { MenuItem } from "primeng/api";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
  items: MenuItem[] = [];

  ngOnInit() {

    this.items = [
      {
        label: 'start', icon: '', routerLink: '/admin'
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
