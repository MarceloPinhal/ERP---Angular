import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StockService {
  api_url!: string;

  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }


  getStock(){
    return this.http.get(`${this.api_url}/stock`)
  }
  postStock(component: any){
    return this.http.post(`${this.api_url}/stock/create/`, component)
  }
  putStock(component: any , id: string){
    return this.http.put(`${this.api_url}/stock/edit/${id}`, component)
  }
  deleteStock(id : string ){
    return this.http.delete(`${this.api_url}/stock/delete/${id}`)
  }
}