import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class customersService {
  api_url!: string;

  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }
  getCustomers(){
    return this.http.get(`${this.api_url}/customers`)
  }
  getCustomerById(id: string){
    return this.http.get(`${this.api_url}/customers/${id}`)
  }
  geCustomerByName(name: string){
    return this.http.get(`${this.api_url}/customers/name/${name}`)
  }
  getCustomerByCif(cif: string){
    return this.http.get(`${this.api_url}/customers/cif/${cif}`)
  }
  postCustomer(component: any){
    return this.http.post(`${this.api_url}/customers/create/`, component)
  }
  putCustomer(component: any , id: string){
    return this.http.put(`${this.api_url}/customers/edit/${id}`, component)
  }
  deleteCustomer(id : string ){
    return this.http.delete(`${this.api_url}/customers/delete/${id}`)
  }
}
