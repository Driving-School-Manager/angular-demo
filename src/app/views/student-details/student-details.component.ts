import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{
  @Input() student?: Student;
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly studentService: StudentService,
  ) {
  }
  ngOnInit(): void {
    this.getStudent();
  }
  private getStudent(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.studentService.findById(id).subscribe(student => this.student = student);
  }

}
