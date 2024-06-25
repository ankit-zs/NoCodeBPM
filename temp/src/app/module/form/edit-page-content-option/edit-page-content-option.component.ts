import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { QuestionElementStructure } from 'src/service/question-card-structure-data';
import { QuestionCardListProps, questionCardList } from 'src/service/question-card-storage';

@Component({
  selector: 'app-edit-page-content-option',
  templateUrl: './edit-page-content-option.component.html',
  styleUrls: ['./edit-page-content-option.component.scss']
})
export class EditPageContentOptionComponent implements OnInit, OnChanges{

  @Input()
  question : QuestionCardListProps | undefined;

  questionCardList : QuestionCardListProps[] = questionCardList;

  questionCardStructure : QuestionElementStructure | undefined;

  @Output()
  selectedCard = new EventEmitter<number>();

  cardToHighlight(){
    if(this.question?.questionCardId != undefined){
      this.selectedCard.emit(this.question.questionCardId);
    }
  }

  deleteCard(){
    // let index = questionCardList.indexOf()

  }

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.questionCardStructure = this.question?.questionCardStructure;
  }

  ngOnInit(): void {
   
  }

}
