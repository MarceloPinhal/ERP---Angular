import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from './../../../../shared/services/orders.service';
import { Component, OnInit } from '@angular/core';
import { IOrder } from './../order-list/interfaces/IOrder' 

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})

export class OrderDetailsComponent implements OnInit{
 
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private ordersService : OrdersService,
    private route: Router
  ) {}

  id! : any;


  public order!: any;


  ngOnInit (): void {
    this.ActivatedRoute.paramMap.subscribe((params) =>{
      this.id = params.get('id');
    })

    this.ordersService.getOrderById(this.id).subscribe((data:any) => {
      this.order = data;
    })
  }

  deleteOrder(orderId: string) {
    this.ordersService.deleteOrder(orderId).subscribe((data) => {
      console.log(data);
      this.route.navigate(['/orders'])
    })
    
  }

}

