import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { WorkFlowProps, workFlowData } from 'src/service/workflow-storage';
import { WorkflowFormComponent } from '../workflow-form/workflow-form.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {


  workFlowData : WorkFlowProps[] = workFlowData;

  isWorkFlowFormVisible : boolean = false;

  showWorkflowFormDiv(){
    this.isWorkFlowFormVisible = true;
  }

  // show(){
  //   const ref = this.dialogService.open(WorkflowFormComponent,{
  //     width: "33%",
  //     height: "40%"
  //   })
  // }

  // constructor(public dialogService : DialogService) { }
  constructor() { }

  ngOnInit(): void {
  }

}
