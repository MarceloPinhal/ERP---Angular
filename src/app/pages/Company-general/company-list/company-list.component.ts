import { ICompany } from './../interface/interfaces';
import { CompanyService } from './../../../../shared/services/company.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  
 companies: ICompany[]=[]

 constructor(private companyService: CompanyService){}

 ngOnInit(): void {
   this.companyService.getCompany().subscribe((data: any) => {
    console.log(data)
    this.companies = data;
   })
 }

}
