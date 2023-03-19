import { CompanyService } from './../../../../shared/services/company.service';
import { ICompany } from './../interface/interfaces';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  companyForm!: FormGroup;
  submitted: boolean = false;
  company: ICompany[]=[];
  arrContacts: any []=[];
  contactObj!: any;
  arrTradeMarks: any []=[];
  tradeMarkObj!: any;

  constructor(private form: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private route: Router) {
    this.companyForm = this.form.group({
      name: ['', [Validators.required]],
      taxIdentificationNumber: ['', [Validators.required]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      cityCode: ['', [Validators.required]],
      address: ['', [Validators.required]],
      contact: ['', [Validators.required]], 
      logo: [''],
      tradeMark: [''], 
    });
  }
  ngOnInit(): void {

    this.companyService.getCompany().subscribe((data: any) => {
      this.company = data
    })
  }

  onSubmit() {

 
    this.submitted = true;
    if (this.companyForm.valid) {
     
      
      const company: ICompany =
        this.companyForm.value;
    
        this.companyService.postCompany(company).subscribe((response) => {
         
        /* this.companyForm.reset(); */
        this.route.navigate(["/company"])
        })
      
    }
  }
  addContact(name: string, phone: string, mail: string) {
    this.contactObj = {
      "name": name, 
      "phone": phone,
      "mail": mail
    } 
    this.arrContacts.push(this.contactObj)
    this.companyForm.patchValue({contact: this.arrContacts})
  }
  addTradeMark(name: string, logo: string, ) {
    this.tradeMarkObj = {
      "name": name, 
      "logo": logo,
      
    } 
    this.arrTradeMarks.push(this.tradeMarkObj)
    this.companyForm.patchValue({tradeMark: this.arrTradeMarks})
    
  }
} 