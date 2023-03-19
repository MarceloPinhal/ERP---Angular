import { ProductsService } from './../../../../shared/services/products.service';
import { Iproduct } from './../product/interfaces/iproduct';
import { Component, OnInit } from '@angular/core';
import {} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { componentsService } from 'src/shared/services/components.service';
import { ProcessesService } from 'src/shared/services/processes.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public productForm!: FormGroup;
  submitted: boolean = false;
  public products!: any[];
  public ref!: any[];
  public process!: any[];
  public component!: any[];

  public ComponentsAdd: any[] = [];
  public NamesComponents: any[] = [];

  public ProcessesAdd: any[] = [];
  public NamesProcesses: any[] = [];
  id!: any;

  constructor(
    private form: FormBuilder,
    private activeRoute: ActivatedRoute,
    private servicio: ProductsService,
    private servComponent: componentsService,
    private servProcess: ProcessesService
  ) {
    
  }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.id = params.get("id")
    });

    if (!this.id){
      // this.productForm = this.form.group({
      //   productReference: ['', [Validators.required]],
      //   sanitaryProductReference: ['', [Validators.required]],
      //   description: ['', [Validators.required]],
      //   images: [''],
      //   components: [''],
      //   processes: [''],
      //   price: [0, [Validators.required]],
      // })
    }else{
      console.log('entra en el else')
      this.servicio.getProductsById(this.id).subscribe((data:any) =>{
        this.products = data;
        console.log(this.products)
        this.productForm = this.form.group({
          //productReference: [this.products.productReference]
  
        })
        
      })
    }

    console.log('entar en el formulario de nuevo producto');
    //  this.servicio.getProducts().subscribe((data:any) =>{
    //   this.ref = data;
    //   console.log(data)
    //  });

    //console.log(this.ref)
    this.servComponent.getComponents().subscribe((data: any) => {
      this.component = data;
    });

    this.servProcess.getProcess().subscribe((data: any) => {
      this.process = data;
    });
  }

  submitProductForm() {
    console.log(this.productForm);
    const formData = new FormData();
    formData.append(
      'productReference',
      this.productForm.get('productReference')?.value
    );
    formData.append(
      'sanitaryProductReference',
      this.productForm.get('sanitaryProductReference')?.value
    );
    formData.append('price', this.productForm.get('price')?.value);
    formData.append('description', this.productForm.get('description')?.value);
    for (const item of this.productForm.get('images')?.value) {
      formData.append('images', item);
    }
    for (const item of this.ComponentsAdd) {
      formData.append('processes', item);
    }
    for (const item of this.ProcessesAdd) {
      formData.append('components', item);
    }
    this.servicio.postProducts(formData).subscribe((data) => {
      console.log(data);
    });
  }
  onFileChange(event: any) {
    this.productForm.get('images')?.setValue(event?.target.files);
  }

  componentsAdd(selectedValue: string): any {
    this.ComponentsAdd.push(selectedValue);
    this.NamesComponents = this.ref.filter((item) =>
      this.ComponentsAdd.includes(item._id)
    );
  }

  processesAdd(selectedValue: string): any {
    this.ProcessesAdd.push(selectedValue);
    this.NamesProcesses = this.process.filter((item) =>
      this.ProcessesAdd.includes(item._id)
    );
  }
}
