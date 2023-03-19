import { Iproduct } from '../product/interfaces/iproduct';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../../../shared/services/products.service';
import {} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  product!: any
  public products!: Iproduct[];
  private id!:any;
  productsFiltered: any[] = [];

  constructor(
    private form: FormBuilder,
    private productsService: ProductsService,

  ){};

  ngOnInit(): void {
    this.productsService.getProducts()?.subscribe((data:any) => {
      this.products = data;
      console.log(this.products)
    })

    
  }

  // this.productsService.getProductsById(this.id).subscribe((data) => {
  //   this.product = data;
  //   console.log(this.product)
  // })

 


  productFind(productName: string) {
    
    this.productsFiltered = this.products.filter((product) =>
      product.productReference.toLowerCase().includes(productName.toLowerCase())
    );
}  
}


