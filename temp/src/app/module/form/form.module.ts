import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditPageComponent } from './edit-page/edit-page.component';
import { EditOptionsComponent } from './edit-options/edit-options.component';
import { EditPageContentComponent } from './edit-page-content/edit-page-content.component';
import { EditPageFilterComponent } from './edit-page-filter/edit-page-filter.component';
import { EditPageContentOptionComponent } from './edit-page-content-option/edit-page-content-option.component';
import { EditPageOptionComponent } from './edit-page-option/edit-page-option.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DragDropModule } from 'primeng/dragdrop';



@NgModule({
  declarations: [
    EditPageComponent,
    EditOptionsComponent,
    EditPageContentComponent,
    EditPageFilterComponent,
    EditPageContentOptionComponent,
    EditPageOptionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
  ],
  exports: [
    
  ]
})
export class FormModule { }
