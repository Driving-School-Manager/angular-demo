import {HttpClient} from "@angular/common/http";
import {CreateDto} from "../model/dto/create-dto/create-dto";
import {catchError, Observable, of} from "rxjs";
import {UpdateDto} from "../model/dto/update-dto/update-dto";

export abstract class CrudService<T> {

  protected constructor(
    protected url: string,
    protected http: HttpClient,
  ) {
  }

  create(createDto: CreateDto): Observable<T> {
    return this.http.post<T>(this.url, createDto)
      .pipe(
        catchError(this.handleError<T>())
      )
  }

  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.url)
      .pipe(
        catchError(this.handleError<T[]>())
      )
  }

  public getById(id: number): Observable<T> {
    return this.http.get<T>(this.url + '/' + id)
      .pipe(
        catchError(this.handleError<T>())
      )
  }

  public patchById(id: number, update: UpdateDto): Observable<T> {
    return this.http.patch<T>((this.url + '/' + id), update)
      .pipe(
        catchError(this.handleError<T>())
      )
  }

  public deleteById(id:number){
    return this.http.delete((this.url + '/' + id))
      .pipe(
        catchError(this.handleError<T>())
      )
  }

  public replace(id: number, createDto:CreateDto){
    return this.http.put((this.url + '/' + id), createDto)
      .pipe(
        catchError(this.handleError<T>())
      )
  }

  protected handleError<T>(result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }

}
