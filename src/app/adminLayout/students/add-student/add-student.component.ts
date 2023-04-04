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
  checked: boolean;
  displayModal: boolean;
  stateOptions: any[];
  addForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    active: true
  });

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
  ) {
    this.checked=true;
    this.displayModal=false;
    this.stateOptions = [
      {label: 'tak', value: true},
      {label: 'nie', value: false}
    ];
  }
  onSubmit():void{
    console.log(this.addForm.value);
    this.studentService.addStudent(this.addForm.value as Student).subscribe();
    this.resetForm();
    this.showModalDialog();
  }

  resetForm(){
    this.addForm.reset();
  }
  showModalDialog(){
    this.displayModal=true;
  }

}
