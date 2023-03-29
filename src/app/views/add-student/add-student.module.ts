import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddStudentComponent} from "./add-student.component";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";




@NgModule({
  declarations: [
    AddStudentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddStudentComponent
      }
    ]),
    FormsModule,
    CheckboxModule,
  ]
})
export class AddStudentModule { }
