import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/model/Vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit{
  vehicles: Vehicle[] = [];
  

  constructor(private vehicleService: VehicleService){  }

  ngOnInit(): void {
    this.vehicleService.getVehicles().subscribe(data =>{
      console.log(data)
      this.vehicles = data;
      console.log(this.vehicles)
    });
  }
}
