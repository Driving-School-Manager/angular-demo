import { Component, OnInit } from '@angular/core';
import { NavBarElement } from 'src/app/model/NavBarElement';


@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.css']
})
export class StudentPanelComponent implements OnInit {

  items: NavBarElement[] = [];
  selectedItem?: NavBarElement;

  ngOnInit() {
    this.items = [
      { name: 'Strona główna' },
      { name: 'Jazdy' },
      { name: 'Płatności' },
      { name: 'Archiwum' }
    ];
  }

  getItem(){
    console.log(this.selectedItem);
  }

}
