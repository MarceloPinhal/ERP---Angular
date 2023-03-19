import { ProductsService } from 'src/shared/services/products.service';
import { componentsService } from 'src/shared/services/components.service';
import { customersService } from './../../../../shared/services/customers.service';
import { OrdersService } from './../../../../shared/services/orders.service';
import { IOrder } from './../order-list/interfaces/IOrder';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
// import * as jQuery from 'jquery';
// import 'select2';
// import 'select2/dist/js/select2.full.js';
// import { Options } from 'select2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orderForm!: FormGroup;
  submitted: boolean = false;
  id!: any;
  order!: IOrder;
  customersArr!: any[];
  productArr!: any[];
  componentArr!: any[];
  componentsAdd: any[] = [];
  productsAdd: any[] = [];
  nameComponents: any[] = [];
  nameProducts: any[] = [];
  loading: boolean = false;
  referenciaProducto: any = "";
  referenciaComponente: any = "";
  constructor(
    private form: FormBuilder,
    private ordersService: OrdersService,
    private route: Router,
    private ActivatedRoute: ActivatedRoute,
    private customersService: customersService,
    private componentsService: componentsService,
    private ProductsService: ProductsService
  ) {
    this.orderForm = new FormGroup({
      // idCustomer: new FormControl(),
      orderNumber: new FormControl(),
      date: new FormControl(),
      products: new FormControl(),
      components: new FormControl(),
      observations: new FormControl(),
      orderStatus: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.customersService.getCustomers().subscribe((data: any) => {
      this.customersArr = data;
    });
    this.ProductsService.getProducts().subscribe((data: any) => {
      this.productArr = data;
    });
    this.componentsService.getComponents().subscribe((data: any) => {
      this.componentArr = data;
    });
    this.ActivatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });
    if (!this.id) {
      this.loading = true;
      this.orderForm = this.form.group({
        idCustomer: ['', [Validators.required]],
        orderNumber: ['', [Validators.required]],
        date: ['', [Validators.required]],
        products: ['', [Validators.required]],
        components: ['', [Validators.required]],
        observations: ['', [Validators.required]],
        orderStatus: ['', [Validators.required]],
      });
    } else {
      this.loading = true;
      this.ordersService.getOrderById(this.id).subscribe((data: any) => {
        this.order = data;
        console.log(this.order);

        this.orderForm = this.form.group({
          orderNumber: [this.order.orderNumber, [Validators.required]],
          date: [this.order.date, [Validators.required]],
          products: [this.order.products, [Validators.required]],
          components: [this.order.components, [Validators.required]],
          observations: [this.order.observations, [Validators.required]],
          orderStatus: [this.order.orderStatus, [Validators.required]],
        });
      });
    }
  }

  addOrder() {
    this.orderForm.patchValue({ products: this.productsAdd });
    this.orderForm.patchValue({ components: this.componentsAdd });

    if (this.orderForm.valid) {
      let newOrder: IOrder = this.orderForm.value;
      if (this.id) {
        this.ordersService.putOrder(newOrder, this.id).subscribe((response) => {
          this.orderForm.reset();
          this.route.navigate(['/orders']);
        });
      } else {
        this.ordersService.postOrder(newOrder).subscribe((response) => {
          this.orderForm.reset();
          this.route.navigate(['/orders']);
        });
      }
    }
  }

  productPush(selectedValue: string, cantidad: string): any {
     this.referenciaProducto = this.productArr.find(element => element._id === selectedValue)
    let products = {
      idProduct: this.referenciaProducto,
      cantidad: cantidad,
    };
    this.productsAdd.push(products);
  }

  componentPush(selectedValue: string, cantidad: string): any {
    this.referenciaComponente = this.componentArr.find(element => element._id === selectedValue)
    let components = {
      idComponent: this.referenciaComponente,
      cantidad: cantidad,
    };
    this.componentsAdd.push(components);

  }
  deleteComponent(item: any) {
    const index = this.componentsAdd.indexOf(item);
    if (index >= 0) {
      this.componentsAdd.splice(index, 1);
    }
  }
  deleteProduct(item: any) {
    const index = this.productsAdd.indexOf(item);
    if (index >= 0) {
      this.productsAdd.splice(index, 1);
    }
    
  }

}
