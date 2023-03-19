import { Customer } from './../interfaces/interfaces';
import { customersService } from './../../../../shared/services/customers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  public customerList!: Customer[];
  filteredCustomerList:any[] = [];

  constructor(
    private customersService: customersService
  ){}

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe((datos:any) => {
      console.log(datos)
      this.customerList = datos;
      this.filteredCustomerList = [...this.customerList]
    })
  }
  
  customerFind(customerName:string){

    this.filteredCustomerList = this.customerList.filter(
      customer => customer.name.toLocaleLowerCase().includes(customerName.toLocaleLowerCase())
    )
  }

  

}
