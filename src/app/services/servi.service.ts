import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiService {

  constructor(private http:HttpClient) { }

  getData(date:any){
   return this.http.get<any>(`https://jsonmock.hackerrank.com/api/stocks?date=${date}`)
  }
}
