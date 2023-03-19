import { environment } from './../../environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  api_url!: string;

  constructor(private http: HttpClient) {
    /* this.api_url ='https://final-poject-back-3jjq.vercel.app'; */
    this.api_url = environment.api_url;
    console.log (environment.api_url);
  }


  getUsers(){
    return this.http.get(`${this.api_url}/users`)
  }
  getUserById(id: string){
    return this.http.get(`${this.api_url}/users/id/${id}`)
  }
  getUserByUser(user: string){
    return this.http.get(`${this.api_url}/providers/provider/${user}`)
  }
  register(user: any){
    return this.http.post(`${this.api_url}/users/register/`, user)
  }
  login(user: any){
    return this.http.post(`${this.api_url}/users/login/`, user)
  }
  changePassword(userId: string, body: any): Observable<any> {
    const url = `${this.api_url}/users/changePassword/${userId}`;
    return this.http.put(url, body);
  }
  /* changePassword(id: string, password: string) {
    return this.http.put(`${this.api_url}/users/${id}/change-password`, { password });
  } */
  deleteUser(id : string ){
    return this.http.delete(`${this.api_url}/users/delete/${id}`)
  }
}