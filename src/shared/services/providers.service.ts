import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  api_url!: string;

  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }

  getProviders(){
    return this.http.get(`${this.api_url}/providers`)
  }
  getProvidertById(id: string){
    return this.http.get(`${this.api_url}/providers/id/${id}`)
  }
  geProviderByProvider(name: string){
    return this.http.get(`${this.api_url}/providers/provider/${name}`)
  }
  getProviderByCif(cif: string){
    return this.http.get(`${this.api_url}/providers/cif/${cif}`)
  }
  postProvider(provider: any){
    return this.http.post(`${this.api_url}/providers/create/`, provider)
  }
  putProvider(provider: any , id: string){
    return this.http.put(`${this.api_url}/providers/edit/${id}`, provider)
  }
  deleteProvider(id : string ){
    return this.http.delete(`${this.api_url}/providers/delete/${id}`)
  }
}