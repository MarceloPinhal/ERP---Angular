import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IProvisioningList } from '../interfaces/Iprovider';
import { ProvisioningService } from 'src/shared/services/provisioning.service';

@Component({
  selector: 'app-provisioning-list',
  templateUrl: './provisioning-list.component.html',
  styleUrls: ['./provisioning-list.component.scss']
})
export class ProvisioningListComponent implements OnInit {

  public provisioningList!: any[];
  provisioningFiltered: any[] = [];

  constructor(
    private ProvisioningService: ProvisioningService,
    private route: Router
  ){}
  ngOnInit(): void {
    this.ProvisioningService.getProvisioning().subscribe((datos:any) => {
      this.provisioningList = datos;
      console.log(this.provisioningList);
      
      
    })
  }
  deleteProvisioning(provisioningId: string) {
    this.ProvisioningService.deleteProvisioning(provisioningId).subscribe((data) => {
      this.route.navigate(['provisioning'])
    })
  }
  postNewProvisioning() {
    this.route.navigate(['provisioning/create'])
  }

  provisioningFind(provisioningName: string) {
    
    this.provisioningFiltered = this.provisioningList.filter(provisioning =>
      provisioning.code.toLowerCase().includes(provisioningName.toLowerCase())
    );
}
}
