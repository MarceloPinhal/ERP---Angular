import { Router } from '@angular/router';
import { ProvidersService } from './../../../../shared/services/providers.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit {
providers!: any[]
providersFiltered: any[] = [];

constructor (
  private providersService: ProvidersService,
  private router:Router
){}

ngOnInit(): void {
  this.providersService.getProviders().subscribe((data: any) => {
    this.providers=data;
    this.providersFiltered = [...this.providers]
  })

}

navigateToDetails(id: string) {
  this.router.navigate(['providers/detail/' + id]);
}

providerFind(providerName: string) {
    
    this.providersFiltered = this.providers.filter(provider =>
      provider.name.toLowerCase().includes(providerName.toLowerCase())
    );
}

}