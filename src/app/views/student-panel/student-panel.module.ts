import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPanelComponent } from "./student-panel.component";
import { RouterModule } from "@angular/router";
import { ListboxModule } from 'primeng/listbox';



@NgModule({
  declarations: [StudentPanelComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentPanelComponent,
      }
    ]),
    ListboxModule
  ]
})
export class StudentPanelModule { }
