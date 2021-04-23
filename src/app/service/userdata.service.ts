import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http'

import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UserdataService {

  private REST_API_SERVER = "http://localhost:3000/getprofile";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    console.log('hi Service');
    return this.httpClient.get(this.REST_API_SERVER);
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
