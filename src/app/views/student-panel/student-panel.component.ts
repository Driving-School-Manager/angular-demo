import { Component, OnInit } from '@angular/core';
import { NavBarElement } from 'src/app/interfaces/NavBarElement';


@Component({
  selector: 'app-student-panel',
  templateUrl: './student-panel.component.html',
  styleUrls: ['./student-panel.component.css']
})
export class StudentPanelComponent implements OnInit {

  items: NavBarElement[] = [];

  ngOnInit() {
    this.items = [
      { name: 'Strona główna' },
      { name: 'Jazdy' },
      { name: 'Płatności' },
      { name: 'Archiwum' }
    ];
  }

}
