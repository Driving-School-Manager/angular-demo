import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { ListboxModule } from 'primeng/listbox';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    ListboxModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPanelComponent,
      }
    ])
  ]
})
export class AdminPanelModule { }
