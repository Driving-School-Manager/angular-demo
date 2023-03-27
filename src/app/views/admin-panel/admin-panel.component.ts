import { Component } from '@angular/core';
import { NavBarElement } from 'src/app/interfaces/NavBarElement';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent {

  items: NavBarElement[] = [];
  selectedItem?: NavBarElement;

  ngOnInit() {
    this.items = [
      { name: 'Strona główna' },
      { name: 'Kursanci' },
      { name: 'Instruktorzy' },
      { name: 'Pojazdy' }
    ];
  }

  getItem(){
    console.log(this.selectedItem);
  }
}
