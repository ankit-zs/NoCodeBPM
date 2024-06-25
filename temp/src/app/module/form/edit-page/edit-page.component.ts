import { Component, OnInit } from '@angular/core';
import { QuestionCardListProps } from 'src/service/question-card-storage';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit {

  constructor() { 
  }

  cardStructureId : number | undefined;

  addQuestionCardToFormPage(cardStructureId : number){
    this.cardStructureId = cardStructureId;
  }

  selectedCard : QuestionCardListProps | undefined;
  
  changeIndividualFilter(selectedCard : QuestionCardListProps){
      this.selectedCard = selectedCard;
  }

  ngOnInit(): void {
  }

}
