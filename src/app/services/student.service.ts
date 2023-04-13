import {Injectable} from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {Student} from "../model/student";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private studentUrl: string;

  constructor(private http: HttpClient) {
    this.studentUrl = 'http://localhost:8080/students'
  }

  public findAll(): Observable<Student[]> {
    return this.http.get<Student[]>(this.studentUrl)
      .pipe(
        catchError(this.handleError<Student[]>([]))
      );
  }

  public findById(id: number): Observable<Student> {
    return this.http.get<Student>(this.studentUrl + '/' + id)
      .pipe(
        catchError(this.handleError<Student>())
      );
  }

  public deleteById(id: number) {
    return this.http.delete(this.studentUrl + '/' + id);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(this.studentUrl, student)
      .pipe(
        catchError(this.handleError<Student>())
      );
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>((this.studentUrl + '/' + student.id), student)
      .pipe(
        catchError(this.handleError<Student>())
      );
  }

  private handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
