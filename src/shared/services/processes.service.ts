import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProcessesService {
  api_url!: string;

  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
  }

  getProcess(){
    return this.http.get(`${this.api_url}/process`)
  }
  getProcessById(id: string){
    return this.http.get(`${this.api_url}/process/id/${id}`)
  }
  getProcessByName(name: string){
    return this.http.get(`${this.api_url}/process/name/${name}`)
  }
  postProcess(process: any){
    return this.http.post(`${this.api_url}/process/create/`, process)
  }
  putProcess(process: any , id: string){
    return this.http.put(`${this.api_url}/process/edit/${id}`, process)
  }
  deleteProcess(id : string ){
    return this.http.delete(`${this.api_url}/process/delete/${id}`)
  }
}
