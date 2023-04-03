import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from './admin-sidebar.component';
import {MenuModule} from "primeng/menu";


@NgModule({
  declarations: [AdminSidebarComponent],
  exports: [
    AdminSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminSidebarComponent,
      }
    ]),
    MenuModule,
  ]
})
export class AdminSidebarModule { }
