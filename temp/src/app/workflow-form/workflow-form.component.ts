import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workflow-form',
  templateUrl: './workflow-form.component.html',
  styleUrls: ['./workflow-form.component.scss']
})

export class WorkflowFormComponent implements OnInit {

  constructor(private router : Router) { }

  workflowName : string = '';
  workflowCategory : string = '';
  workflowDescription : string = '';

  showHomePage(){
    this.router.navigate(["/home"]);
  }
  showEditPage(){
    this.router.navigate(["/edit"]);
  }

  ngOnInit(): void {

  }

}
