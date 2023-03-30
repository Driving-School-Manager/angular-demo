import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private readonly apiUrlVehicles: string = 'http://localhost:8080/vehicles';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrlVehicles}`)
  }

  deleteVehicle(id: number): Observable<number> {
    console.log(id);
    return this.http.delete<number>(`${this.apiUrlVehicles}/`+id)
  }
}
