import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  api_url!: string;

  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }
  getCurrency() {
    return this.http.get(`${this.api_url}/currency`);
  }
  getCurrencyById(id: string) {
    return this.http.get(`${this.api_url}/currency/id/${id}`);
  }
  getCurrencyByCurrency(name: string) {
    return this.http.get(`${this.api_url}/currency/currency/${name}`);
  }

  postCurrency(currency: any) {
    return this.http.post(`${this.api_url}/currency/create/`, currency);
  }
  putCurrency(currency: any, id: string) {
    return this.http.put(`${this.api_url}/currency/edit/${id}`, currency);
  }
  deleteCurrency(id: string) {
    return this.http.delete(`${this.api_url}/currency/delete/${id}`);
  }
}
