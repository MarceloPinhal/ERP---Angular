import { Router } from '@angular/router';
import { IBill } from './../budget-list/interfaces/IBill';
import { BillsService } from './../../../../shared/services/bills.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss'],
})
export class BillListComponent implements OnInit {
  billsList: any[] = [];
  billsFiltered: any[] = [];
 

  constructor(private billsService: BillsService, private router: Router) {}

  ngOnInit(): void {
    this.billsService.getBills().subscribe((data: any) => {
      this.billsList = data;
      this.billsFiltered = [...this.billsList]
    });

  }
  
  navigateToDetails(id: string) {
    this.router.navigate(['bills/detail/' + id]);
  }
  
  billStateFind(billState:any) {
   
    this.billsFiltered = this.billsList.filter((bill) => {
      return bill.paymentStatus === billState    
    });

    if (billState === "all bills"){
      this.billsFiltered = this.billsList
    }
  }

}
