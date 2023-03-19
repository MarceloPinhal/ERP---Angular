import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProformaService {
  api_url!: string;

  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }

  getProforma(){
    return this.http.get(`${this.api_url}/proforma`)
  }
  getProformaById(id: string){
    return this.http.get(`${this.api_url}/proforma/id/${id}`)
  }
  getProformaByBudget(ref: string){
    return this.http.get(`${this.api_url}/proforma/budget/${ref}`)
  }
  getProformaByOrder(id: string){
    return this.http.get(`${this.api_url}/proforma/order/${id}`)
  }
  getProformaByCustomer(id: string){
    return this.http.get(`${this.api_url}/proforma/customer/${id}`)
  }
  postProforma(proforma: any){
    return this.http.post(`${this.api_url}/proforma/create/`, proforma)
  }
  putProforma(proforma: any , id: string){
    return this.http.put(`${this.api_url}/proforma/edit/${id}`, proforma)
  }
  deleteProforma(id : string ){
    return this.http.delete(`${this.api_url}/proforma/delete/${id}`)
  }
}
