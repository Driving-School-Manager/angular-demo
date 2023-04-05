import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleListComponent } from './vehicle-list.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { CardModule } from 'primeng/card';



@NgModule({
  declarations: [
    VehicleListComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    CardModule,

    RouterModule.forChild([
      {
        path: '',
        component: VehicleListComponent,
      }
    ])
  ]
})
export class VehicleListModule { }
