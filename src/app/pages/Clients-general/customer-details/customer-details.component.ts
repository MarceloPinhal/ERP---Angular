import { Customer } from './../interfaces/interfaces';
import { customersService } from './../../../../shared/services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit{

  constructor(
    private route:Router,
    private ActivatedRoute: ActivatedRoute,
    private customersService: customersService
  ){}

  id! : any;

  public customer!: any;

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((params) => {
      this.id = params.get("id");
    })

    this.customersService.getCustomerById(this.id).subscribe((data:any) => {
      console.log(data);
      this.customer = data;
    })
  }

  deleteCustomer(customerId: string) {
    this.customersService.deleteCustomer(customerId).subscribe((data) => {
      console.log(data);
      this.route.navigate(['/customers'])
    })
  }
}
