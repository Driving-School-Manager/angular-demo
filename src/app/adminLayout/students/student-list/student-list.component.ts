import {Component, OnInit} from '@angular/core';
import {Student} from "../../../model/student";
import {StudentService} from "../../../services/student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];
  idToUpdate: number = 0;
  displayUpdate: boolean = false;
  addStudentUrl: string = '/addStudent'

  constructor(
    private studentService: StudentService,
  ) {}

  ngOnInit(): void {
    this.studentService.findAll().subscribe(data => {
      this.students = data;
    })

  }

  deleteStudent(id: number) {
    this.deleteStudentFromList(id);
    this.studentService.deleteById(id).subscribe();
  }

  deleteStudentFromList(id: number) {
    this.students = this.students.filter(s => s.id !== id);
  }

  getEventValue($event: any): string {
    return $event.target.value;
  }

  setDisplayUpdate(display:boolean){
    this.displayUpdate = display;
  }

  addStudentToList(student: Student){
    this.students.push(student);
    this.displayUpdate=false;
  }

  scrollUp(){
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


}
