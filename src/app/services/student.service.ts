import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl:string;

  constructor(private http: HttpClient) {
    this.studentUrl = 'http://localhost:8080/students'
  }

  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl);
  }

  public findById(id: number): Observable<Student>{
    return this.http.get<Student>(this.studentUrl+'/'+id);
  }

}
