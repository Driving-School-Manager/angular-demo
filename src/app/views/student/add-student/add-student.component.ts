import { Component } from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {FormBuilder} from "@angular/forms";
import {Student} from "../../../model/student";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  checked: boolean = true;
  addForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    active: true
  })

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
  ) {}
  onSubmit():void{
    console.log(this.addForm.value);
    this.studentService.addStudent(this.addForm.value as Student).subscribe();
  }

}
