import { StockService } from './../../../../shared/services/stock.service';
import { Component, OnInit } from '@angular/core';
import { IStock } from '../stock/interfaces/iStock';
import {} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ActivationEnd } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit{
  public stock!: any[];

  constructor(
    private StockService: StockService,
  ){};

  ngOnInit(): void {
    this.StockService.getStock()?.subscribe((data:any) =>{
      this.stock = data;
      console.log(this.stock)
    })
  }

  
}
