import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StudentDetailsComponent} from './student-details.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {SelectButtonModule} from "primeng/selectbutton";
import {InputTextModule} from "primeng/inputtext";


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
    ButtonModule,
    RippleModule,
    SelectButtonModule,
    InputTextModule,
    ReactiveFormsModule,
  ]
})
export class StudentDetailsModule { }
