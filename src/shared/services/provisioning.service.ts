import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvisioningService {
  api_url!: string;

  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }


  getProvisioning(){
    return this.http.get(`${this.api_url}/provisioning`)
  }
  getProvisioningById(id: string){
    return this.http.get(`${this.api_url}/provisioning/id/${id}`)
  }
  getProvisioningByCode(code: string){
    return this.http.get(`${this.api_url}/provisioning/code/${code}`)
  }
  getProvisioningByProvider(id: string){
    return this.http.get(`${this.api_url}/provisioning/provider/${id}`)
  }
  postNewProvisioning(provisioning: any){
    return this.http.post(`${this.api_url}/provisioning/create/`, provisioning)
  }
  putProvisioning(provisioning: any , id: string){
    return this.http.put(`${this.api_url}/provisioning/edit/${id}`, provisioning)
  }
  deleteProvisioning(id : string ){
    return this.http.delete(`${this.api_url}/provisioning/delete/${id}`)
  }
}
