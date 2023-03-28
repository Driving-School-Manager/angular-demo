import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavBarElement } from 'src/app/model/NavBarElement';


@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.css']
})
export class StudentPanelComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Strona główna' },
      { label: 'Jazdy', icon: '', routerLink:''},
      { label: 'Płatności', icon: '', routerLink:''},
      { label: 'Archiwum', icon: '', routerLink:'' }
    ];
  }
}
