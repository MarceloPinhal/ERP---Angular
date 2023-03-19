import { ProcessesService } from './../../../../shared/services/processes.service';
import { Component, OnInit } from '@angular/core';
import { IProcessList } from '../process-list/interfaces/IProcessList';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {
  processForm!: FormGroup;
  process!: IProcessList;
  submitted: boolean = false;
  id!: any;

  constructor(
    private ProcessesService: ProcessesService,
    private form: FormBuilder,
    private route: Router,
    private ActivatedRoute: ActivatedRoute
  ){}
  ngOnInit(): void {

    this.processForm = this.form.group({
      name: ["", [Validators.required] ],
    })

    this.processForm.valueChanges.subscribe((data) => {
      this.process = data;
    })

    this.ActivatedRoute.paramMap.subscribe((params) => {
      this.id = params.get("id");
    })

    
  }

  addProcess(){

    if(this.processForm.valid){
      let newProcess: IProcessList = this.processForm.value;
      this.ProcessesService.postProcess(newProcess).subscribe((response) => {
        console.log(response)
        this.processForm.reset();
        this.route.navigate(["/processes"])
      })
    }
  }

  editProcess(){
    this.submitted =true;
      if(this.processForm.valid){
        let updatedProcess: IProcessList = this.process;
        this.ProcessesService.putProcess(updatedProcess, this.id).subscribe((response) => {
          console.log(response);
          
          this.processForm.reset();
          this.route.navigate(["/processes"])
        })
      }


  }

  
}

