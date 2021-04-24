import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserdataService {

  private REST_API_SERVER = "http://localhost:3000/foo";

  constructor(private httpClient: HttpClient) { }


  public sendGetRequest(){
    console.log('hi Service');
    return this.httpClient.get(this.REST_API_SERVER).pipe(retry(3), catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
/*getSeries(){
  return this.http.get<any[]>("http://127.0.0.1:3000/getProfile1")
  .pipe(
    map((res) => {
      console.log(res);
      return <any[]> res
    })
  )
}*/
}
