import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { NavBarElement } from 'src/app/model/NavBarElement';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Strona główna' },
      { label: 'Kursanci'},
      { label: 'Instruktorzy'},
      { label: 'Pojazdy' }
    ];
  }

  getItem(){
    // console.log(this.selectedItem);
  }
}
