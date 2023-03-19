import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  api_url!: string;

  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }

  getPurchaseOrder(){
    return this.http.get(`${this.api_url}/purchase`)
  }
  getPurchaseOrderById(id: string){
    return this.http.get(`${this.api_url}/purchase/id/${id}`)
  }
  postPurchaseOrder(purchase: any){
    return this.http.post(`${this.api_url}/purchase/create/`, purchase)
  }
  putPurchaseOrder(purchase: any , id: string){
    return this.http.put(`${this.api_url}/purchase/edit/${id}`, purchase)
  }
  deletePurchaseOrder(id : string ){
    return this.http.delete(`${this.api_url}/purchase/delete/${id}`)
  }
}
