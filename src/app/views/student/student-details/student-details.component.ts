import {Component, Input, OnInit} from '@angular/core';
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
    this.studentService.updateStudent(this.updateForm.value as Student).subscribe();
   // this.router.navigateByUrl('/students');
  }

  private getStudent(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.studentService.findById(id).subscribe(student => this.student = student);
  }



}
