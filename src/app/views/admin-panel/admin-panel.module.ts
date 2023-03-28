import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { ListboxModule } from 'primeng/listbox';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminPanelComponent
  ],
  imports: [
    CommonModule,
    ListboxModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: AdminPanelComponent,
      }
    ])
  ]
})
export class AdminPanelModule { }
