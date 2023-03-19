import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public user!:any 
  constructor() {}

  getToken() {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
  }

  getRole() {
    return localStorage.getItem('rol')
  }
}