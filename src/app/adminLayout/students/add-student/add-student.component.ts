import {Component, OnInit} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {FormBuilder} from "@angular/forms";
import {Student} from "../../../model/student";
import {InputTextElement} from "../../../model/form-elements/InputTextElement";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  checked: boolean;
  displayModal: boolean;
  stateOptions: any[] = [];
  inputTextElements: InputTextElement[] = [];
  inputBooleanElements: InputTextElement[] = [];
  addForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    email: '',
    active: true
  });
  homeUrl: string = '/admin';
  studentListUrl: string = '/admin/students'

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder,
  ) {
    this.checked = true;
    this.displayModal = false;

  }

  ngOnInit() {
    this.stateOptions = [
      {label: 'tak', value: true},
      {label: 'nie', value: false}
    ];
    this.inputTextElements = [
      {fieldTitle: "imię", formControlName: "firstName"},
      {fieldTitle: "nazwisko", formControlName: "lastName"},
      {fieldTitle: "e-mail", formControlName: "email"},
    ];
    this.inputBooleanElements = [
      {fieldTitle: "zgody marketingowe", formControlName: "marketingEnabled"},
    ];
  }

  onSubmit(): void {
    console.log(this.addForm.value);
    this.studentService.addStudent(this.addForm.value as Student).subscribe();
    this.resetForm();
    this.showModalDialog();
  }

  resetForm() {
    this.addForm.reset();
  }

  showModalDialog() {
    this.displayModal = true;
  }

}
