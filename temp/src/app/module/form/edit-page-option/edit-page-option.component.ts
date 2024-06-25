import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormOptionProps, formOptions } from 'src/service/edit-page-options';

@Component({
  selector: 'app-edit-page-option',
  templateUrl: './edit-page-option.component.html',
  styleUrls: ['./edit-page-option.component.scss'],
})
export class EditPageOptionComponent implements OnInit {

  editOptions : FormOptionProps[] = formOptions;

  params : FormOptionProps | undefined;


  // dragEnd(){
  //   this.params = undefined;
  // }
  // dragStart(data : FormOptionProps){
  //   this.params = data;
  // }

  @Output()
  elementDrag = new EventEmitter<number>();

  emitDragElementData(cardStructureId : number){
    this.elementDrag.emit(cardStructureId);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
