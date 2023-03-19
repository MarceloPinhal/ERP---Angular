//import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class componentsService {

  api_url!: string;

  constructor(private http: HttpClient) {
    this.api_url ='https://final-poject-back-3jjq.vercel.app';
    //this.api_url ='http://localhost:8000';
  }
  
  public headers = {
    headers: new HttpHeaders().set("Content-Type", "multipart/form-data")
  }
  getComponents(){
    try{
      return this.http.get(`${this.api_url}/components`)
    }catch{
      console.log('peta aquí')
      return (this.http.get(`${this.api_url}/components`))
    }
    
  }
  getComponentById(id: string){
    return this.http.get(`${this.api_url}/components/id/${id}`)
  }
  getComponentByComponentReference(ref: string){
    return this.http.get(`${this.api_url}/components/componentReference/${ref}`)
  }
  getComponentBySanitaryComponentReference(ref: string){
    return this.http.get(`${this.api_url}/components/sanitaryComponentReference/${ref}`)
  }
  getComponentByDescription(name: string){
    return this.http.get(`${this.api_url}/components/description/${name}`)
  }
  getComponentsByProvider(id: string){
    return this.http.get(`${this.api_url}/components/provider/${id}`)
  }
  getComponentsByProcess(id: string){
    return this.http.get(`${this.api_url}/components/process/${id}`)
  }
  postComponent(component: any){
    return this.http.post(`${this.api_url}/components/create/`, component)
  }
  putComponent(component: any , id: string){
    return this.http.put(`${this.api_url}/components/edit/${id}`, component)
  }
  deleteComponent(id : string ){
    return this.http.delete(`${this.api_url}/components/delete/${id}`)
  }



}


