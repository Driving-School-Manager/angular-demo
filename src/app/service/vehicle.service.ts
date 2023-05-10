import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Vehicle} from '../model/vehicle';
import {CrudService} from "./crud-service";
import {Constraints} from "./constraints";

@Injectable({
  providedIn: 'root'
})
export class VehicleService extends CrudService<Vehicle> {

  constructor(http: HttpClient) {
    super(Constraints.VEHICLES_URL, http)
  }

}
