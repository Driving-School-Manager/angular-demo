import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentPanelComponent } from "./student-panel.component";
import { RouterModule } from "@angular/router";
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';





@NgModule({
  declarations: [StudentPanelComponent],
  imports: [
    CommonModule,
    MenuModule,
    RouterModule.forChild([
      {
        path: '',
        component: StudentPanelComponent,
      }
    ]),
    ListboxModule,
    FormsModule
  ]
})
export class StudentPanelModule { }
