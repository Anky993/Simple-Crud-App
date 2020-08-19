import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  constructor(private http:HttpClient) { }

  add(data){
    return this.http.post<any>('http://localhost:9000/add', data)
  }
  edit(data){
    return this.http.post<any>('http://localhost:9000/editid', data)
  }
  getData(data){
    return this.http.post<any>('http://localhost:9000/getData', data)
  }
  delete(data){
    return this.http.post<any>('http://localhost:9000/deleteid', data)
  }

}
