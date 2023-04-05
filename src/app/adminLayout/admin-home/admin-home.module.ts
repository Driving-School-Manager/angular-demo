import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from "./admin-home.component";
import { RouterModule } from "@angular/router";



@NgModule({
  declarations: [AdminHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminHomeComponent,
      }
    ]),
  ]
})
export class AdminHomeModule { }
