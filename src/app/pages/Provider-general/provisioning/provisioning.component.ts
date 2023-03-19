import { ProvisioningService } from './../../../../shared/services/provisioning.service';
import { ProvidersService } from './../../../../shared/services/providers.service';
 import { IProvisioningList } from './../interfaces/Iprovider';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-provisioning',
  templateUrl: './provisioning.component.html',
  styleUrls: ['./provisioning.component.scss']
})
export class ProvisioningComponent implements OnInit {

  public provisioningForm!: FormGroup;
  public provisioning: IProvisioningList[]=[];
  public id!: any;
  public submitted: boolean = false;

  /* public idProvider: string = ''; 
  public code: string = '';
  public description: string = '';
  public price:number = 0; */
  public providers: any[]=[];


  constructor(
    private form: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private provisioningService: ProvisioningService,
    private providerService: ProvidersService,
    private route: Router
  ) {
    this.provisioningForm = this.form.group({
      idProvider: ["", [Validators.required]],
      code: ["", [Validators.required] ],
      description: ["", [Validators.required] ],
      price: ["", [Validators.required] ],
    })
  }

    ngOnInit(): void {
      /* this.provisioningService.getProvisioning().subscribe((data: any) => {
        this.provisioning = data
      }) */
      this.providerService.getProviders().subscribe((data: any) => {
        this.providers = data
      })
    }



    onSubmit() {

      /* const send = {...this.provisioningForm.value, ...{provider:this.idProvider}}
    console.log(send) */
    console.log(this.provisioningForm.value);
    if(this.provisioningForm.valid){
      console.log('hola');
      this.provisioningService.postNewProvisioning(this.provisioningForm.value).subscribe((response) => {
        this.provisioningForm.reset();
        this.route.navigate(["/provisioning"])
      })
    }
    }
} 
