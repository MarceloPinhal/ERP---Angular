import { componentsService } from './../../../../shared/services/components.service';
import { Icomponent } from './../component/interfaces/Icomponents';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.scss'],
})
export class ComponentDetailsComponent implements OnInit {
id! : any;
component!:any;

  constructor(
    private componentSv: componentsService,
    private activeRoute: ActivatedRoute,
    private route: Router
  ) {};

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
    });

    this.componentSv.getComponentById(this.id).subscribe((data:any) => {
      console.log(data)
      this.component = data;
    });
  }

  deleteComponent(componentId: string) {
    this.componentSv.deleteComponent(componentId).subscribe((data) => {
      console.log(data);
      this.route.navigate(['/components'])
    });
  }
  editComponent() {
    this.route.navigate(['/components/edit/' + this.id]);
  }

}