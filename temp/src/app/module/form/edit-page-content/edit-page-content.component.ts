import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { QuestionElementStructure, questionCardsStructureList } from 'src/service/question-card-structure-data';
import { QuestionCardListProps, questionCardList } from 'src/service/question-card-storage';

@Component({
  selector: 'app-edit-page-content',
  templateUrl: './edit-page-content.component.html',
  styleUrls: ['./edit-page-content.component.scss']
})
export class EditPageContentComponent implements OnInit {

  questionCardList : QuestionCardListProps[] = questionCardList;

  questionCardsStructureList : QuestionElementStructure[] = questionCardsStructureList;

  @Input()
  cardStructureId : number | undefined;

  drop(){
    if(this.cardStructureId != undefined){

      let newCard : QuestionElementStructure[] = questionCardsStructureList.filter(card => this.cardStructureId === card.questionId);

      let newQuestionCardId : number = questionCardList.length + 1;
      questionCardList.push({
        questionCardId: newQuestionCardId,
        questionCardStructure: {...newCard[0]}
      });
      this.highlightCard(newQuestionCardId);
    }
  }

  selectedCardId : number | undefined;

  @Output()
  questionCardSelected = new EventEmitter<QuestionCardListProps>();
  
  highlightCard(newSelectedCardId : number){
    this.selectedCardId = newSelectedCardId;
    this.changeSelectedCard();
  }

  changeSelectedCard(){
    questionCardList.forEach(card => {
      if(card.questionCardId === this.selectedCardId){
        card.questionCardStructure.selected = true;
        this.questionCardSelected.emit(card);

      }
      else{
        card.questionCardStructure.selected = false;
      }
    })
  }



  constructor() { }

  ngOnInit(): void {
  }

}
