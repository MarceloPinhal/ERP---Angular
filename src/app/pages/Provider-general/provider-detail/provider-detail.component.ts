import { ProvidersService } from './../../../../shared/services/providers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-provider-detail',
  templateUrl: './provider-detail.component.html',
  styleUrls: ['./provider-detail.component.scss']
})
export class ProviderDetailComponent implements OnInit {
id!: any;
provider!: any;

constructor (
  private activatedRoute: ActivatedRoute,
  private providersService : ProvidersService,
  private route: Router
){}

ngOnInit(): void {
  
  this.activatedRoute.paramMap.subscribe((params:any) => {
    this.id = params.get("id");
  })

  this.providersService.getProvidertById(this.id).subscribe((data:any) => {
    this.provider = data;
    console.log(this.provider)
  })

}

deleteProvider(providerId: string) {
  this.providersService.deleteProvider(providerId).subscribe((data) => {
    this.route.navigate(['/providers'])
  })
  console.log('voy a borrar' + providerId);
}
}

