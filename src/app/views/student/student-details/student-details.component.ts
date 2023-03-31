import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from "../../../model/student";
import {ActivatedRoute} from "@angular/router";
import {StudentService} from "../../../services/student.service";
import {FormBuilder, FormGroup} from "@angular/forms";

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
  stateOptions: any[];
  editName: boolean;
  editLastName: boolean;
  editEmail:boolean;
  updateForm: FormGroup;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly studentService: StudentService,
    private readonly formBuilder: FormBuilder,
  ) {
    this.stateOptions = [
      {label: 'tak', value: true},
      {label: 'nie', value: false}
    ];
    this.editName=false;
    this.editLastName=false;
    this.editEmail=false;
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
  }
  onSubmit():void{
    this.deleteOldStudentEvent.emit(this.updateForm.value.id);
    this.studentService.updateStudent(this.updateForm.value as Student).subscribe((s)=>this.passUpdatedStudent(s));
  }

  ngOnChanges(){
    this.getStudent();
  }

  private getStudent(): void {
    this.studentService.findById(this.idToUpdate).subscribe(student => this.student = student);
  }

  stopDisplaying(){
    this.stopDisplayEvent.emit(false);
  }
  passUpdatedStudent(student: Student){
    console.log("in pass updated student" + student.id)
    this.newStudentEvent.emit(student);
  }




}
