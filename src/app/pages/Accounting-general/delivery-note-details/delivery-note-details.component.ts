import { ActivatedRoute, Router } from '@angular/router';
import { deliveryNotesService } from './../../../../shared/services/deliver-notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delivery-note-details',
  templateUrl: './delivery-note-details.component.html',
  styleUrls: ['./delivery-note-details.component.scss']
})
export class DeliveryNoteDetailsComponent implements OnInit {

  id!: any;
  deliveryNote!: any;

  constructor(private deliveryNotesService: deliveryNotesService,
    private activeRoute: ActivatedRoute,
    private route: Router
    ){};

    ngOnInit(): void {
      this.activeRoute.paramMap.subscribe((params) => {
        this.id = params.get('id');
        // console.log(this.id)
      });
  
      this.deliveryNotesService.getDeliveryNotesById(this.id).subscribe((data:any) => {
        this.deliveryNote = data;
        console.log(this.deliveryNote)
      });
    }
  
    deleteDeliveryNote(deliNoteId: string) {
      this.deliveryNotesService.deleteDeliveryNote(deliNoteId).subscribe((data) => {
        this.route.navigate(['/deliveryNotes'])
      });
    }
    editDeliveryNote() {
      this.route.navigate(['/deliveryNotes/edit/' + this.id]);
    } 
}
