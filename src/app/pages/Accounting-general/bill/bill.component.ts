import { ProductsService } from './../../../../shared/services/products.service';
import { customersService } from './../../../../shared/services/customers.service';
import { BillsService } from './../../../../shared/services/bills.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss'],
})
export class BillComponent implements OnInit {
  billForm: FormGroup;
  customers: any[]= [];
  products: any[]=[]
 
  
  customersIds:any[]=[];
  customersFiltered:any[]=[];

  productsIds:any[]=[];
  productsFiltered:any[]=[];

  constructor(
    private form: FormBuilder,
    private billsService: BillsService,
    private customersService: customersService,
    private route: Router,
    private productsService:ProductsService
  ) {
    this.billForm = this.form.group({
      billNumber: ['', [Validators.required]],
      orderNumber: ['', [Validators.required]],
      date: ['', [Validators.required]],
      paymentDate: ['', [Validators.required]],
      paymentStatus: ['', [Validators.required]],
      paymentMethod: ['', [Validators.required]],
      // customer: ['', [Validators.required]],
      // product: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      pricePerUnit: ['', [Validators.required]],
      totalPrice: ['', [Validators.required]],
      tax: ['', [Validators.required]],
      clientDiscount: ['', [Validators.required]],
      shipmentCost: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe((data: any) => {
      this.customers = data
     
    })

    this.productsService.getProducts().subscribe((data: any) => {
      this.products = data
     
    })
  }

  customersAdd(selectedValue:string): void {
    this.customersIds.push(selectedValue)
    this.customersFiltered = this.customers.filter((item)=>{
     return  this.customersIds.includes(item._id)   
    })
    
  }

  productsAdd(selectedValue:string): void {
    this.productsIds.push(selectedValue)

    this.productsFiltered = this.products.filter((item)=>{
     return  this.productsIds.includes(item._id)   
    })
  }

  onSubmit() {
    // confirmar modelo exacto en el back 

   const send = {...this.billForm.value,...{customer:this.customersIds},...{product:this.productsIds}}
  console.log(send)

    if(this.billForm.valid) {
      this.billsService.postBill(send).subscribe((response)=>{
        console.log(response)
        this.billForm.reset();
        this.route.navigate(['/bills'])
      })
    }
  

  }

}
