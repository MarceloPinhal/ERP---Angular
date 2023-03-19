import { customersService } from './../../../../shared/services/customers.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IDeliveryNotes } from './../interfaces/interfaces';
import { ProductsService } from 'src/shared/services/products.service';
import { deliveryNotesService } from './../../../../shared/services/deliver-notes.service';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-delivery-note',
  templateUrl: './delivery-note.component.html',
  styleUrls: ['./delivery-note.component.scss']
})
export class DeliveryNoteComponent implements OnInit {
  public deliverynotesForm!: FormGroup;
  public delNotes: IDeliveryNotes[]=[];
  public products: any[]=[];
  public submitted: boolean = false;
  public customers: any[]=[];
  public id!:any;
  public deliveryNote!:any;
  public productsIds: any[]=[];
  public productsFiltered: any[]=[];

  public customersIds: any[] = [];
  public customersFiltered: any[] = [];


  constructor(private form: FormBuilder,
    private deliveryNotesService: deliveryNotesService,
    private productService: ProductsService,
    private route: Router,
    private customersService:customersService,
    private activatedRoute: ActivatedRoute
    ) {
    this.deliverynotesForm = new FormGroup({
      deliveryNotesNum: new FormControl(),
      date: new FormControl(),
      customer: new FormControl(),
      idProduct: new FormControl(),
      description: new FormControl(),
      quantity: new FormControl(),
    });
  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    if (!this.id) {
      this.deliverynotesForm = this.form.group({
        deliveryNotesNum: ['', [Validators.required]],
        date: ['', [Validators.required]],
        customer: ['', [Validators.required]],
        idProduct: ['', [Validators.required]],
        description: [''],
        quantity:[''],
      });
    }

      this.deliveryNotesService.getDeliveryNotesById(this.id).subscribe((data:any)=>{
        this.deliveryNote = data
        this.deliverynotesForm = this.form.group({
          deliveryNotesNum: [this.deliveryNote.deliveryNotesNum],
          date: [this.deliveryNote.date],
          customer: ['', [Validators.required]],
          idProduct: ['', [Validators.required]],
          description: [this.deliveryNote.description],
          quantity:[this.deliveryNote.quantity],
        });


      })


    this.deliveryNotesService.getDeliveryNotes().subscribe((data: any) => {
      this.delNotes = data
      
    })
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data
    })
    
    this.customersService.getCustomers().subscribe((data: any) => {
      this.customers = data
    })
    

  }


  productsAdd(selectedValue:string): void {
 
    this.productsIds.push(selectedValue)
    this.productsFiltered = this.products.filter((item)=> this.productsIds.includes(item._id))
  }

  customersAdd(selectedValue:string): void {
 
    this.customersIds.push(selectedValue)
    this.customersFiltered = this.customers.filter((item)=> this.customersIds.includes(item._id))
  }

  addDeliveryNote() {
    const send = {...this.deliverynotesForm.value,...{idProduct: this.productsIds},...{customer:this.customersIds}}
    console.log(send)
    
    if(this.deliverynotesForm.valid){
      this.deliveryNotesService.postNewDeliveryNote(send).subscribe((response) => {
        this.deliverynotesForm.reset();
        this.route.navigate(["/deliveryNotes"])
      })
    }
  }

  editdeliveryNote() {
 
    
      let editDeliveryNote: any = this.deliverynotesForm.value;
      this.deliveryNotesService
        .putDeliveryNote(editDeliveryNote, this.id)
        .subscribe((response) => {
        
          this.deliverynotesForm.reset();
          this.route.navigate(['deliveryNotes']);
        });
    
  }

  
}
