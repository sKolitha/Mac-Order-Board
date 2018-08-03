import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerCommentComponent } from './customer-comment/customer-comment.component';
import { FilterCriteriaComponent } from './filter-criteria/filter-criteria.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

  ],
  declarations: [
    CustomerCommentComponent,
    FilterCriteriaComponent
  ],
  exports:[
    CustomerCommentComponent,
    FilterCriteriaComponent,
    CommonModule,
    FormsModule    
  ]
})
export class SharedModule { }
