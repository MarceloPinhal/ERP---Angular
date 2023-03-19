import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BillsService {
  api_url!: string;


  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
    //this.api_url = "http://localhost:3001"
  }

  getBills() {
    return this.http.get(`${this.api_url}/bills`);
  }
  getBillById(id: string) {
    return this.http.get(`${this.api_url}/bills/Id/${id}`);
  }
  getBillByBillNumber(num: string) {
    return this.http.get(`${this.api_url}/bills/billNumber/${num}`);
  }
  getBillByCustomer(customer: string) {
    return this.http.get(`${this.api_url}/bills/customer/${customer}`);
  }
  getpaymentStatus(value: string) {
    return this.http.get(`${this.api_url}/bills/description/${value}`);
  }
  getbillsByProvider(id: string) {
    return this.http.get(`${this.api_url}/bills/provider/${id}`);
  }
  postBill(bill: any) {
    return this.http.post(`${this.api_url}/bills/create/`, bill);
  }
  putBill(bill:any, id: string) {
    return this.http.put(`${this.api_url}/bills/edit/${id}`, bill)
  }
  deleteBill(id: string) {
    return this.http.delete(`${this.api_url}/bills/delete/${id}`);
  }
}
