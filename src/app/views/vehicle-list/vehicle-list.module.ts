import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleListComponent } from './vehicle-list.component';

@NgModule({
  declarations: [VehicleListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: VehicleListComponent,
      }
    ])
  ]
})
export class VehicleListModule { }
