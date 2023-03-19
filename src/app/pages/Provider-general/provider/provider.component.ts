import { Router, ActivatedRoute } from '@angular/router';
import { ProvidersService } from './../../../../shared/services/providers.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit{
id!: any;
provider!: any;

providerForm!: FormGroup;
submitted: boolean = false;

arrContacts: any[] = []
contactObj!: any;
contactArrayForm: any

  constructor(
    private form: FormBuilder,
    private providersService:ProvidersService,
    private route : Router,
    private activatedRoute : ActivatedRoute,
    ) {
      this.providerForm = new FormGroup({
        name:  new FormControl(),
        taxIdentificationNumber:  new FormControl(),
        country:  new FormControl(),
        city:  new FormControl(),
        cityCode:  new FormControl(),
        address:  new FormControl(),
        phone: new FormControl(),
        email: new FormControl(),
        shipmentFree:  new FormControl(),
        observations:  new FormControl(),
    })
  }
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get("id");
  })

  if (!this.id) {
    this.providerForm = this.form.group({
        name: ['', [Validators.required]],
        taxIdentificationNumber: ['', [Validators.required]],
        country: ['', [Validators.required]],
        city: ['', [Validators.required]],
        cityCode: ['', [Validators.required]],
        address: ['', [Validators.required]],
        phone: ['', [Validators.required]],
        email: ['', [Validators.required]],
        shipmentFree: ['',[Validators.required]],
        observations: [''],
    });
  } else {

    this.providersService.getProvidertById(this.id).subscribe((data: any) => {
      this.provider = data;
    
      this.providerForm = this.form.group({
        name: [this.provider.name, [Validators.required]],
        taxIdentificationNumber: [this.provider.taxIdentificationNumber, [Validators.required]],
        country: [this.provider.country, [Validators.required]],
        city: [this.provider.city, [Validators.required]],
        cityCode: [this.provider.cityCode, [Validators.required]],
        address: [this.provider.address, [Validators.required]],
        phone: [this.provider.phone, [Validators.required]],
        email: [this.provider.email, [Validators.required]],
        shipmentFree: [this.provider.shipmentFree,[Validators.required]],
        observations: [this.provider. observation],
      });
    });
  }


}

  submitProvider () {
   
    if (this.providerForm.valid) {
      const newProvider: any = this.providerForm.value;
        console.log(newProvider);
        this.providersService.postProvider(newProvider).subscribe((response) => {
        this.providerForm.reset(); 
        this.route.navigate(["/providers"])
        })
    }
  }

  editProvider() {
    
      let editProvider: any= this.providerForm.value;
      this.providersService
        .putProvider(editProvider, this.id)
        .subscribe((response) => {
          console.log(response);
          this.providerForm.reset();
          this.route.navigate(['/providers']);
        });
    
  }
  


}
