import { customersService } from './../../../../shared/services/customers.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  customerForm!: FormGroup;
  submitted: boolean = false;
  id!: any;
  customer!: any;
 
 

  constructor(
    private form: FormBuilder,
    private customersService: customersService,
    private route: Router,
    private ActivatedRoute: ActivatedRoute
  ) {
    this.customerForm = new FormGroup({
      name: new FormControl(),
      taxIdentificationNumber: new FormControl(),
      country: new FormControl(),
      city: new FormControl(),
      cityCode: new FormControl(),
      address: new FormControl(),
      phone: new FormControl(),
      email: new FormControl(),
      discount: new FormControl(),
      shipmentFree: new FormControl(),
      observations: new FormControl(),
      logo: new FormControl(),
    });
  }
  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    if (!this.id) {
      this.customerForm = this.form.group({
        name: ['', [Validators.required]],
        taxIdentificationNumber: ['', [Validators.required]],
        country: ['', [Validators.required]],
        city: ['', [Validators.required]],
        cityCode: ['', [Validators.required]],
        address: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required]],
        discount: ['', [Validators.required]],
        shipmentFree: ["", [Validators.required]],
        observations: [''],
        logo: [''],
        });
    } else {
      this.customersService.getCustomerById(this.id).subscribe((data: any) => {
        this.customer = data;
 

        this.customerForm = this.form.group({
          name: [this.customer.name, [Validators.required]],
          taxIdentificationNumber: [
            this.customer.taxIdentificationNumber,
            [Validators.required],
          ],
          country: [this.customer.country, [Validators.required]],
          city: [this.customer.city, [Validators.required]],
          cityCode: [this.customer.cityCode, [Validators.required]],
          address: [this.customer.address, [Validators.required]],
          phone: [this.customer.phone, [Validators.required]],
          email: [this.customer.email, [Validators.required]],
          discount: [this.customer.discount, [Validators.required]],
          shipmentFree: [this.customer.shipmentFree, [Validators.required]],
          observations: [this.customer.observations,],
          logo: [this.customer.logo],
        });
      });
    }
  }



  addCustomer() {

      let newCustomer: any = this.customerForm.value;
    console.log(newCustomer)
      this.customersService.postCustomer(newCustomer).subscribe((response) => {
      
        this.customerForm.reset();
        this.route.navigate(['/customers']);
      });
  
  }

  editCustomer() {
    this.submitted = true;
    
      let editCustomer: any = this.customerForm.value;
      this.customersService
        .putCustomer(editCustomer, this.id)
        .subscribe((response) => {
          console.log(response);
          this.customerForm.reset();
          this.route.navigate(['/customers']);
        });
    
  }


}
