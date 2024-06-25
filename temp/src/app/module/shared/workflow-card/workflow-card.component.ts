import { Component, Input, OnInit } from '@angular/core';
import { WorkFlowProps } from 'src/service/workflow-storage';

@Component({
  selector: 'app-workflow-card',
  templateUrl: './workflow-card.component.html',
  styleUrls: ['./workflow-card.component.scss']
})
export class WorkflowCardComponent implements OnInit {

  @Input()
  workflow!: WorkFlowProps;

  @Input()
  cardType: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
