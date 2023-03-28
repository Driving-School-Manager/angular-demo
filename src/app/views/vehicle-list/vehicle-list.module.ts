import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleListComponent } from './vehicle-list.component';
import { AdminPanelModule } from '../admin-panel/admin-panel.module';

@NgModule({
  declarations: [VehicleListComponent],
  imports: [
    CommonModule,
    AdminPanelModule,
    RouterModule.forChild([
      {
        path: '',
        component: VehicleListComponent,
      }
    ])
  ]
})
export class VehicleListModule { }
