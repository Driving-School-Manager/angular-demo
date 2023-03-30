import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentDetailsComponent} from './student-details.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";


@NgModule({
  declarations: [
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentDetailsComponent
      }
    ]),
    FormsModule,
    CheckboxModule,
  ]
})
export class StudentDetailsModule { }
