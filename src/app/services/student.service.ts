import {Injectable} from '@angular/core';
import {Student} from "../model/Student";
import {HttpClient} from "@angular/common/http";
import {CrudService} from "./crud-service";
import {Constraints} from "./constraints";

@Injectable({
  providedIn: 'root'
})
export class StudentService extends CrudService<Student> {

  constructor(http: HttpClient) {
    super(Constraints.STUDENTS_URL, http)
  }

}
