import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class deliveryNotesService {
  api_url!: string;

  constructor(private http: HttpClient) {
    this.api_url = environment.api_url;
   
  }


  getDeliveryNotes(){
    return this.http.get(`${this.api_url}/deliveryNotes`)
  }
  getDeliveryNotesById(id: string){
    return this.http.get(`${this.api_url}/deliveryNotes/Id/${id}`)
  }
  getDeliveryNotesByDeliveryNumber(ref: string){
    return this.http.get(`${this.api_url}/deliveryNotes/deliveryNumber/${ref}`)
  }
  getDeliveryNotesByCustomer(customer: string){
    return this.http.get(`${this.api_url}/deliveryNotes/customer/${customer}`)
  }
  postNewDeliveryNote(deliveryNote: any){
    return this.http.post(`${this.api_url}/deliveryNotes/create/`, deliveryNote)
  }
  putDeliveryNote(deliveryNote: any , id: string){
    return this.http.put(`${this.api_url}/deliveryNotes/edit/${id}`, deliveryNote)
  }
  deleteDeliveryNote(id : string ){
    return this.http.delete(`${this.api_url}/deliveryNotes/delete/${id}`)
  }



}