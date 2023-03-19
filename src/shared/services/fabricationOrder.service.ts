import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FabricationOrderService {

  api_url: string;
  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }

  getFabricationOrders(){
    return this.http.get(`${this.api_url}/fabricationOrder`)
  }
  getFabricationOrderById(id: string){
    return this.http.get(`${this.api_url}/fabricationOrder/id/${id}`)
  }
  getFabricationOrderByOrderNumber(valor: string){
    return this.http.get(`${this.api_url}/fabricationOrder/orderNumber/${valor}`)
  }
  getFabricationOrderByIdProduct(id: string){
    return this.http.get(`${this.api_url}/fabricationOrder/product/${id}`)
  }
  getFabricationOrderByComponent(id: string){
    return this.http.get(`${this.api_url}/fabricationOrder/component/${id}`)
  }
  postFabricationOrder(fabricationOrder: any){
    return this.http.post(`${this.api_url}/fabricationOrder/create`, fabricationOrder)
  }
  putFabricationOrder(fabricationOrder: any , id: string){
    return this.http.put(`${this.api_url}/fabricationOrder/edit/${id}`, fabricationOrder)
  }
  deleteFabricationOrder(id : string ){
    return this.http.delete(`${this.api_url}/fabricationOrder/delete/${id}`)
  }
}
