import { Component, Input, OnInit } from '@angular/core';
import { FormOptionProps } from 'src/service/edit-page-options';


@Component({
  selector: 'app-edit-options',
  templateUrl: './edit-options.component.html',
  styleUrls: ['./edit-options.component.scss']
})
export class EditOptionsComponent implements OnInit {

  @Input()
  params ?: FormOptionProps;

  constructor() { }

  ngOnInit(): void {
  }

}
