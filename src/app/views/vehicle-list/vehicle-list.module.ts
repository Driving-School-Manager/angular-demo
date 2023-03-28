import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleListComponent } from './vehicle-list.component';
import { TableModule } from 'primeng/table';



@NgModule({
  declarations: [
    VehicleListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    RouterModule.forChild([
      {
        path: '',
        component: VehicleListComponent,
      }
    ])
  ]
})
export class VehicleListModule { }
