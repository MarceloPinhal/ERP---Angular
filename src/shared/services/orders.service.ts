import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  api_url!: string;

  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }

  getOrders(){
    return this.http.get(`${this.api_url}/orders`)
  }
  getOrderById(id: string){
    return this.http.get(`${this.api_url}/orders/id/${id}`)
  }
  getOrderByOrderStatus(status: string){
    return this.http.get(`${this.api_url}/orders/orderStatus/${status}`)
  }
  getOrdersByCustomer(customer: string){
    return this.http.get(`${this.api_url}/orders/sanitaryOrderReference/${customer}`)
  }
  postOrder(Order: any){
    return this.http.post(`${this.api_url}/orders/create/`, Order)
  }
  putOrder(Order: any , id: string){
    return this.http.put(`${this.api_url}/orders/edit/${id}`, Order)
  }
  deleteOrder(id : string ){
    return this.http.delete(`${this.api_url}/orders/delete/${id}`)
  }



}
