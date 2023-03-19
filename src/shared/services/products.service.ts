import { environment } from './../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  api_url!: string;

  constructor(private http: HttpClient) {

    this.api_url = environment.api_url;

    // this.api_url ='http://localhost:8000';


  }


  getProducts(){
    return this.http.get(`${this.api_url}/products`)
  }
  getProductsById(id: string){
    return this.http.get(`${this.api_url}/products/id/${id}`)
  }
  getProductsByProductsReference(ref: string){
    return this.http.get(`${this.api_url}/products/productReference/${ref}`)
  }
  getProductsBySanitaryProductsReference(ref: string){
    return this.http.get(`${this.api_url}/product/sanitaryproductReference/${ref}`)
  }
  getProductsByDescription(name: string){
    return this.http.get(`${this.api_url}/products/description/${name}`)
  }
  getProductsByComponents(id: string){
    return this.http.get(`${this.api_url}/products/component/${id}`)
  }
  postProducts(products: any){
    return this.http.post(`${this.api_url}/products/create/`, products)
  }
  putProducts(products: any , id: string){
    return this.http.put(`${this.api_url}/products/edit/${id}`, products)
  }
  deleteProducts(id : string ){
    return this.http.delete(`${this.api_url}/products/delete/${id}`)
  }


}
