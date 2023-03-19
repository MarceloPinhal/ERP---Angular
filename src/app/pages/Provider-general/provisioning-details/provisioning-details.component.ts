import { ProvisioningService } from './../../../../shared/services/provisioning.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProvisioningList } from '../interfaces/Iprovider';

@Component({
  selector: 'app-provisioning-details',
  templateUrl: './provisioning-details.component.html',
  styleUrls: ['./provisioning-details.component.scss']
})
export class ProvisioningDetailsComponent implements OnInit {
  constructor(
    private ActivatedRoute: ActivatedRoute,
    private ProvisioningService: ProvisioningService,
    private route: Router
  ) {}

  id! : any;

  public provisioningList!: any;

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((params) => {
      this.id = params.get("id");
    })

    this.ProvisioningService.getProvisioningById(this.id).subscribe((data:any) => {
      console.log(data);
      
      this.provisioningList = data;
    })
  }
  deleteProvisioning(provisioningId: string) {
    this.ProvisioningService.deleteProvisioning(provisioningId).subscribe((data) => {
      console.log(data);
      this.route.navigate(['provisioning'])
      
    })
  }



}

