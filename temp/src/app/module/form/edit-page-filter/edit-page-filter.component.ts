import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { QuestionCardListProps } from 'src/service/question-card-storage';

@Component({
  selector: 'app-edit-page-filter',
  templateUrl: './edit-page-filter.component.html',
  styleUrls: ['./edit-page-filter.component.scss']
})
export class EditPageFilterComponent implements OnInit, OnChanges {

  filterView : string = "general";

  switchFilterGeneral(){
    this.filterView = "general"
  }
  switchFilterIndividual(){
    this.filterView = "individual"
  }

  @Input()
  questionCard : QuestionCardListProps | undefined;

  filters : any[] | undefined;

  switchToggleButton = (id : number): void =>{
    let filterCard = this.questionCard?.questionCardStructure.filter.find(filter=> id === filter.filterId);
    filterCard.value = !filterCard.value;
  }

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.filters = this.questionCard?.questionCardStructure.filter;
  }

  ngOnInit(): void {
  }

}
