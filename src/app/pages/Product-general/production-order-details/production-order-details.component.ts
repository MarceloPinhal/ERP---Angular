import { IProductionOrder } from './../production-order-list/interfaces/IProductionOrder';
import { FabricationOrderService } from './../../../../shared/services/fabricationOrder.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-production-order-details',
  templateUrl: './production-order-details.component.html',
  styleUrls: ['./production-order-details.component.scss']
})
export class ProductionOrderDetailsComponent implements OnInit{

  public id! : any;
  public productionOrder!:any;

  constructor (private activatedRoute: ActivatedRoute,
    private fabricationOrderService: FabricationOrderService,
    private route: Router
    ){}

  

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe ((params)=>{
      this.id = params.get("id")
    })
    this.fabricationOrderService.getFabricationOrderById(this.id).subscribe((data:any)=>{
      this.productionOrder = data;
      console.log(this.productionOrder)
    })

  }
  deleteProdOrder(fabricationOrderId: string) {
    this.fabricationOrderService.deleteFabricationOrder(fabricationOrderId).subscribe((data) => {
      console.log(data);
      this.route.navigate(['fabricationOrder'])
      
    })
  }
}
