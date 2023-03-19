import { IDeliveryNotes } from './../../Accounting-general/interfaces/interfaces';
import { ActivatedRoute } from '@angular/router';
import { Icomponent } from '../component/interfaces/Icomponents';
import { componentsService } from './../../../../shared/services/components.service';
import { ProcessesService } from './../../../../shared/services/processes.service';
import { ProvidersService } from './../../../../shared/services/providers.service';

import {} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-component-list',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
})
export class ComponentComponent implements OnInit {
  id!: any;
  public componentForm: FormGroup;
  submitted: boolean = false;

  public components!: any;
  public ref!: any[];
  public Process!: any[];
  public Providers!: any[];

  public EquivalencesAdd: any[] = [];
  public NamesEquivalences: any[] = [];

  public ProvidersAdd: any[] = [];
  public NamesProviders: any[] = [];

  public ProcessesAdd: any[] = [];
  public NamesProcesses: any[] = [];

  constructor(
    private form: FormBuilder,
    private activeRoute: ActivatedRoute,
    private servicio: componentsService,
    private servProcess: ProcessesService,
    private servProviders: ProvidersService
  ) {
    this.componentForm = new FormGroup({
      componentReference: new FormControl(),
      sanitaryComponentReference: new FormControl(),
      description: new FormControl(),
      images: new FormControl(),
      equivalences: new FormControl(),
      processes: new FormControl(),
      providers: new FormControl(),
    })
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.id = params.get('id')
    });

    this.servicio.getComponents().subscribe((data: any) => {
      this.ref = data;
    });

    this.servProcess.getProcess().subscribe((data: any) => {
      this.Process = data;

    });

    this.servProviders.getProviders().subscribe((data: any) => {
      this.Providers = data;
    });
 

  if (!this.id){
      this.componentForm = this.form.group({
          componentReference: ['', [Validators.required]],
          sanitaryComponentReference: ['', [Validators.required]],
          description: ['', [Validators.required]],
          images: [""],
          planes: [''],
          equivalences: [''],
          processes: [''],
          providers: [''],
        });

  } else{
    this.servicio.getComponentById(this.id).subscribe((data:any)=>{
      this.components = data;
      console.log(this.components)

      this.componentForm = this.form.group({
        componentReference: [this.components.componentReference],
        sanitaryComponentReference: [this.components.sanitaryComponentReference],
        description: [this.components.description],
        images: [this.components.images],
        equivalences: [this.components.equivalences],
        processes: [this.components.processes],
        providers: [this.components.Providers]
      })
    })
   
  }
}

  submitComponentForm() {
    const formData = new FormData();
    formData.append(
      'componentReference',
      this.componentForm.get('componentReference')?.value
    );
    formData.append(
      'sanitaryComponentReference',
      this.componentForm.get('sanitaryComponentReference')?.value
    );
    formData.append(
      'description',
      this.componentForm.get('description')?.value
    );

    for (const item of this.componentForm.get('images')?.value) {
      formData.append('images', item);
    }

    for (const item of this.EquivalencesAdd) {
      formData.append('equivalences', item);
    }
    for (const item of this.ProcessesAdd) {
      formData.append('processes', item);
    }
    for (const item of this.ProvidersAdd) {
      formData.append('providers', item);
    }
  
    this.servicio.postComponent(formData).subscribe((data:any) => {
      console.log(data);
    });
  }

  onFileChange(event: any) {

    console.log('holllaa')
    console.log(event.target.files);

    this.componentForm.get('images')?.setValue(event.target.files);
  }


 
  equivalenceAdd(selectedValue:string) : any{

    this.EquivalencesAdd.push(selectedValue)
    this.NamesEquivalences = this.ref.filter((item)=> this.EquivalencesAdd.includes(item._id))
    //this.NamesEquivalences = this.EquivalencesAdd.map((item:any) => item.componentReference)


  }
  processesAdd(selectedValue: string): any {
    console.log(selectedValue);

    this.ProcessesAdd.push(selectedValue);

    this.NamesProcesses = this.Process.filter((item) =>
      this.ProcessesAdd.includes(item._id)
    );
  }

  providerAdd(selectedValue: string): any {
    console.log(selectedValue);
    this.ProvidersAdd.push(selectedValue);
    this.NamesProviders = this.Providers.filter((item) =>
      this.ProvidersAdd.includes(item._id)
    );
  }
}
