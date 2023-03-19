import { Router } from '@angular/router';
import { IProductionOrder } from './interfaces/IProductionOrder';
import { FabricationOrderService } from './../../../../shared/services/fabricationOrder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-order-list',
  templateUrl: './production-order-list.component.html',
  styleUrls: ['./production-order-list.component.scss']
})
export class ProductionOrderListComponent implements OnInit {
productionOrderList: IProductionOrder[]= [];
filteredProdOrderList: any[] = [];

constructor(private fabricationOrderService:FabricationOrderService, private router: Router){}

ngOnInit(): void {
  this.fabricationOrderService.getFabricationOrders().subscribe((data: any) => {
    const results: IProductionOrder[] = data
    this.productionOrderList = results
    console.log(this.productionOrderList)
  }
  )


}

navigateToDetails(id: string) {
  this.router.navigate(['productionOrder/detail/' + id]);
}
prodOrderFind(prodOrderName:string){

  this.filteredProdOrderList = this.productionOrderList.filter(
    productionOrder => productionOrder.orderNumber.toLocaleLowerCase().includes(prodOrderName.toLocaleLowerCase())
  )
}

}
