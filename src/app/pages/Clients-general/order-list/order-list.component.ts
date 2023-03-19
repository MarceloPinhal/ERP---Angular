
import { IOrder } from './interfaces/IOrder';
import { Router } from '@angular/router';
import { OrdersService } from './../../../../shared/services/orders.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
ordersList!: any[];
ordersListFiltered: any[] = [];

  public id! : any;
 

  constructor (
    private ordersService: OrdersService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe((data: any) => {
     this.ordersList = data  
     this.ordersListFiltered = [...this.ordersList]
    

    })

  }

  navigateToDetails(id: string) {
    this.router.navigate(['orders/detail/' + id]);
  }


  orderListFind(orderListState:string){

    this.ordersListFiltered = this.ordersList.filter((
     order) => {
        return order.orderStatus.toLowerCase().includes(orderListState.toLowerCase())
      })

  }

}
