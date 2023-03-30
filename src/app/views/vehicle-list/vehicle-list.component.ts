import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/model/Vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];
  first: number = 0;
  rows: number = 10;

  constructor(private vehicleService: VehicleService) { }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      console.log(data);
      this.vehicles = data;
      console.log(this.vehicles);
    });
  }

  onPageChange(event: { first: number; rows: number; }) {
    this.first = event.first;
    this.rows = event.rows;
  }

  reload(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      this.vehicles = data;
    })
  }

  editVehicle(): void { }

  printVehicle(): void {
    console.log('printVehicle')
  }

  deleteVehicle(id: number): void {
    this.vehicleService.deleteVehicle(id).subscribe(() => {
      this.reload();
    })
  }

}
