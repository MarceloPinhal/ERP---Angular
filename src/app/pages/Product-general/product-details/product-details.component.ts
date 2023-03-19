import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../product/interfaces/iproduct';
import { ProductsService } from 'src/shared/services/products.service';
import { componentsService } from 'src/shared/services/components.service';
import { ProcessesService } from 'src/shared/services/processes.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  public product!: any;
  private id!: any;
  private allComponents: any[] = [];
  private allProcesses: any[] = [];
  private componentsSee: any[] =[];
  private processesSee: any[] = [];


  constructor(
    private productsSv: ProductsService,
    private activeRoute: ActivatedRoute,
    private svComponents : componentsService,
    private svProcesses : ProcessesService,
    private route: Router
  
  ){};

  ngOnInit():void {
    this.activeRoute.paramMap.subscribe((params) =>{
      this.id = params.get('id');
      console.log (this.id)
    })

    this.productsSv.getProductsById(this.id).subscribe((data:any) => {
      this.product = data;
      console.log(this.product)
    })

//     this.svComponents.getComponents().subscribe((data:any) =>{
//         this.allComponents = data
//         console.log(this.allComponents)
//     })

//     this.svProcesses.getProcess().subscribe((data:any) =>{
//       this.allProcesses = data
//       console.log(this.allProcesses)
//   })

//  for (const component of this.product.components) {
//   //const item = this.allComponents.filter(component) ={}
//     this.componentsSee.push()
//  }

    
  }

  deleteProduct(productId: string) {
    this.productsSv.deleteProducts(productId).subscribe((data) => {
      console.log(data);
      
      this.route.navigate(['/products'])
    })
  }


  editProduct() {
    this.route.navigate(['products/edit/' + this.id])
  }
}
