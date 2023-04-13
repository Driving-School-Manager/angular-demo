import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD:src/app/views/navbar-panel/navbar-panel.module.ts
import { NavbarPanelComponent } from './navbar-panel.component';
import { MenuModule } from 'primeng/menu';
=======
import { AdminSidebarComponent } from './admin-sidebar.component';
import {MenuModule} from "primeng/menu";
>>>>>>> dev:src/app/adminLayout/admin-sidebar/admin-sidebar.module.ts


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
