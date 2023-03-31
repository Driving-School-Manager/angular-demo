import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddStudentComponent} from "./add-student.component";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {SelectButtonModule} from "primeng/selectbutton";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DialogModule} from "primeng/dialog";




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
        ReactiveFormsModule,
        InputTextModule,
        SelectButtonModule,
        ButtonModule,
        RippleModule,
        DialogModule,
    ]
})
export class AddStudentModule { }
