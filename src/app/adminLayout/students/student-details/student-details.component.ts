import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../../../model/Student";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../../services/student.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {InputTextElement} from "../../../model/form-elements/InputTextElement";
import {InputBooleanElement} from "../../../model/form-elements/InputBooleanElement";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() student?: Student;
  @Input() idToUpdate!: number;
  @Output() stopDisplayEvent = new EventEmitter<boolean>();
  @Output() newStudentEvent = new EventEmitter<Student>();
  @Output() deleteOldStudentEvent = new EventEmitter<number>();
  stateOptions: any[] = [];
  editName: boolean;
  editLastName: boolean;
  editEmail: boolean;
  updateForm: FormGroup;
  inputTextElements: InputTextElement[] = [];
  inputBooleanElements: InputBooleanElement[] = [];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly studentService: StudentService,
    private readonly formBuilder: FormBuilder,
  ) {

    this.editName = false;
    this.editLastName = false;
    this.editEmail = false;
    this.updateForm = this.formBuilder.group({
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      active: null
    });
  }

  ngOnInit(): void {
    this.getStudent();
    this.stateOptions = [
      {label: 'tak', value: true},
      {label: 'nie', value: false}
    ];

  }

  onSubmit(): void {
    this.deleteOldStudentEvent.emit(this.updateForm.value.id);
    this.studentService.patchById(this.updateForm.value.id, this.updateForm.value as Student).subscribe((s) => this.passUpdatedStudent(s));
  }

  ngOnChanges() {
    this.getStudent();
  }

  private getStudent(): void {
    this.studentService.getById(this.idToUpdate).subscribe(student => {
      this.student = student;
      this.inputTextElements = [
        {fieldTitle: "imię", formControlName: "firstName", readOnly: true, initialValue: student.firstName},
        {fieldTitle: "nazwisko", formControlName: "lastName", readOnly: true, initialValue: student.lastName},
        {fieldTitle: "e-mail", formControlName: "email", readOnly: true, initialValue: student.email},
      ];
      this.inputBooleanElements = [
        {fieldTitle: "zgody marketingowe", formControlName: "marketingEnabled", initialValue: student.marketingEnabled},
      ];
    });
  }

  stopDisplaying() {
    this.stopDisplayEvent.emit(false);
  }

  passUpdatedStudent(student: Student) {
    console.log("in pass updated student" + student.id)
    this.newStudentEvent.emit(student);
  }


}
