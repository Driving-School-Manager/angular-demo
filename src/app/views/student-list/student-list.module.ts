import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list.component';
import {RouterModule} from "@angular/router";
import { TableModule } from 'primeng/table';
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";



@NgModule({
  declarations: [
    StudentListComponent
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
    ButtonModule
  ]
})



export class StudentListModule { }
