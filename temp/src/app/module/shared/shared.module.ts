import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from 'src/app/module/shared/navbar/navbar.component';
import { PageNotFoundComponent } from 'src/app/module/shared/page-not-found/page-not-found.component';
import { WorkflowCardComponent } from './workflow-card/workflow-card.component';



@NgModule({
  declarations: [
    NavbarComponent,
    PageNotFoundComponent,
    WorkflowCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    PageNotFoundComponent,
    WorkflowCardComponent,
  ]
})
export class SharedModule { }
