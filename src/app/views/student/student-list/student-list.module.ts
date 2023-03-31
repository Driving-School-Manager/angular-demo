import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentListComponent} from './student-list.component';
import {RouterModule} from "@angular/router";
import {TableModule} from 'primeng/table';
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import {InputTextModule} from "primeng/inputtext";
import {StudentDetailsComponent} from "../student-details/student-details.component";
import {ReactiveFormsModule} from "@angular/forms";
import {SelectButtonModule} from "primeng/selectbutton";


@NgModule({
  declarations: [
    StudentListComponent,
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentListComponent
      }
    ]),
    TableModule,
    RippleModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    SelectButtonModule,

  ]
})


export class StudentListModule {
}
