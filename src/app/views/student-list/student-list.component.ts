import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit{
  students: Student[] = [];
  constructor(/*private studentService = StudentService*/) {

  }
  ngOnInit(): void {
    //TODO: refactor it to get data from Student Service
    this.students = [
      {id: 1, firstName: 'Jan', lastName: 'Kowalski', email: "1@mail.com",isActive: true},
      {id: 2, firstName: 'Bob', lastName: 'Dylan', email: "2@mail.com",isActive: false},
      {id: 3, firstName: 'John', lastName: 'Smith', email: "3@mail.com",isActive: true},
    ];


    // this.studentService.findAll().subscribe(data => {
    //   this.students = data;
    // })

  }

}
