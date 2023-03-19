import { IDeliveryNotes } from './../interfaces/interfaces';
import { ProductsService } from 'src/shared/services/products.service';
import { Router } from '@angular/router';
import { deliveryNotesService } from './../../../../shared/services/deliver-notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-note-list',
  templateUrl: './delivery-note-list.component.html',
  styleUrls: ['./delivery-note-list.component.scss']
})
export class DeliveryNoteListComponent implements OnInit {

  deliveryNotesList: any[]=[];
  delNotesFiltered: any[]=[];
  

  constructor(
    private deliveryNotesService: deliveryNotesService,
    private router: Router,
   
  ){}

  ngOnInit(): void {

      this.deliveryNotesService.getDeliveryNotes().subscribe((data: any) => {
        console.log(data)
        const results: IDeliveryNotes[] = data
        this.deliveryNotesList = results
      })
    }
    
    navigateToDetails(id: string) {
      this.router.navigate(['deliveryNotes/detail/' + id]);
    }

    delNotesFind(delNoteName: string) {
    
      this.delNotesFiltered = this.deliveryNotesList.filter(deliveryNote =>
        deliveryNote.deliveryNotesNum.toLowerCase().includes(delNoteName.toLowerCase())
      );
  }
  }

