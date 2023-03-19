import { ProcessesService } from './../../../../shared/services/processes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProcessList } from '../process-list/interfaces/IProcessList';
@Component({
  selector: 'app-process-details',
  templateUrl: './process-details.component.html',
  styleUrls: ['./process-details.component.scss']
})
export class ProcessDetailsComponent implements OnInit{

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private ProcessesService: ProcessesService,
    private route: Router
  ) {}

  id! : any;

  public process!: IProcessList;

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((params) => {
      this.id = params.get("id");
    })

    this.ProcessesService.getProcessById(this.id).subscribe((data:any) => {
      console.log(data);
      
      this.process = data;
    })
  }
  deleteProcess(processId: string) {
    this.ProcessesService.deleteProcess(processId).subscribe((data) => {
      console.log(data);
      
      this.route.navigate(['/process'])
    })
    
  }
}
