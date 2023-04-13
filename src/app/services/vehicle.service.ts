import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Vehicle } from '../model/Vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private readonly apiUrlVehicles: string = 'http://localhost:8080/vehicles';

  constructor(private http: HttpClient) { }

  getVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrlVehicles}`)
      .pipe(
        catchError(this.handleError<Vehicle[]>([]))
      );
  }

  deleteVehicle(id: number): Observable<number> {
    console.log(id);
    return this.http.delete<number>(`${this.apiUrlVehicles}/` + id)
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
