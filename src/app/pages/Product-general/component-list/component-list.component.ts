import { Icomponent } from '../component/interfaces/Icomponents';
import { componentsService } from './../../../../shared/services/components.service';
import {} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.scss'],
})


export class ComponentListComponent implements OnInit {
  // componentsListForm: FormGroup;
  // submitted: boolean = false;
  public components!: Icomponent[];
  public filteredComponentList: any[] = []

  constructor(
    private form: FormBuilder,
    private componentList: componentsService
  ) {
    //this.componentsListForm = this.form.group({
    //})
  }
  ngOnInit(): void {
    this.componentList.getComponents()?.subscribe((data: any) => {
      //console.log(data)
      this.components = data;
      this.filteredComponentList = [...this.components];
      console.log(this.components);
    });
  }


 componentFind(componentReference: string) {
    this.filteredComponentList = this.components.filter((
      component) => {
      return component.componentReference.toLowerCase().includes(componentReference.toLowerCase());
    });

  // createNewComponent(){
  //   console.log("CrearNuevoComponente")

  // }
}}
