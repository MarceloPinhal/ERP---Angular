import { ProcessesService } from './../../../../shared/services/processes.service';
import { componentsService } from './../../../../shared/services/components.service';
import { ProductsService } from './../../../../shared/services/products.service';
import { IProductionOrder } from './../production-order-list/interfaces/IProductionOrder';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FabricationOrderService } from './../../../../shared/services/fabricationOrder.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-production-order',
  templateUrl: './production-order.component.html',
  styleUrls: ['./production-order.component.scss']
})
export class ProductionOrderComponent implements OnInit {

productionOrderForm!: FormGroup;
productionOrder!:IProductionOrder;
productionOrders:IProductionOrder[]=[];
products:any[]= [];
components:any[]=[];
processes:any[]=[];
id!:any


public productsIds:any[]=[]
public productsFiltered:any[]=[]

public componentsIds:any[]=[]
public componentsFiltered:any[]=[]

public processesIds:any[]=[]
public processesFiltered:any[]=[]

  constructor (
    private form: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private fabricationOrderService:FabricationOrderService,
    private productsService: ProductsService,
    private componentsService: componentsService,
    private processesService: ProcessesService,
    private route: Router
  ) {

  this.productionOrderForm = this.form.group({
    orderNumber: ["", [Validators.required] ],
    quantity: ["", [Validators.required] ],
    date: ["", [Validators.required] ],
    expectedEnd: ["",[Validators.required] ],
  })
}
    ngOnInit(): void {

  this.fabricationOrderService.getFabricationOrders().subscribe((data: any) => {
        this.productionOrders = data
      })
       
  this.productsService.getProducts().subscribe((data: any) => {
    this.products = data
  })

  this.componentsService.getComponents().subscribe((data: any) => {
    this.components = data
  })

  this.processesService.getProcess().subscribe((data: any) => {
    this.processes = data
  })

  this.activatedRoute.paramMap.subscribe((params) => {
    this.id = params.get("id");
  })
  }

  productsAdd(selectedValue:string): void {
 
    this.productsIds.push(selectedValue)
    this.productsFiltered = this.products.filter((item)=> this.productsIds.includes(item._id))
  }

  componentsAdd(selectedValue:string): void {
    
    this.componentsIds.push(selectedValue)
    this.componentsFiltered = this.components.filter((item)=> this.componentsIds.includes(item._id))
  }

 processesAdd(selectedValue:string): void {
    
    this.processesIds.push(selectedValue)
    this.processesFiltered = this.processes.filter((item)=> this.processesIds.includes(item._id))
  }

  onSubmit (){
    // confirmar modelo exacto en el back 

    // console.log(this.productionOrderForm.value)

    const send = {...this.productionOrderForm.value, ...{idProduct:this.productsIds, idComponent:this.componentsIds, processes:this.processesIds}}
    // console.log(send)
    // console.log("products" + this.productsIds, "components" + this.componentsIds,"processes" + this.processesIds)
    if(this.productionOrderForm.valid){
      this.fabricationOrderService.postFabricationOrder(send).subscribe((response) => {
        console.log(response);
        this.productionOrderForm.reset();
        this.route.navigate(["/productionOrder"])
      })
    }
  }

    }
  


