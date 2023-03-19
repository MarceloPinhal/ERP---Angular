import { Component, OnInit } from '@angular/core';
import { ProcessesService } from 'src/shared/services/processes.service';
import { IProcessList } from './interfaces/IProcessList';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent  implements OnInit{

  public processList!: IProcessList[];
  processesFiltered: any[] = [];
  constructor(
    private ProcessesService: ProcessesService
  ){}
  ngOnInit(): void {
    this.ProcessesService.getProcess().subscribe((datos:any) => {
      this.processList = datos;
      
    })
  }
  processFind(processName: string) {
    
    this.processesFiltered = this.processList.filter(process =>
      process.name.toLowerCase().includes(processName.toLowerCase())
    );
}
}
