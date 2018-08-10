import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomerCommentComponent } from './customer-comment/customer-comment.component';
import { FilterCriteriaComponent } from './filter-criteria/filter-criteria.component';
import { ConvertBooleanToStringPipe } from './custom-pipes/convert-boolean-to-string.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CustomerCommentComponent,
    FilterCriteriaComponent,
    ConvertBooleanToStringPipe
  ],
  exports: [
    CustomerCommentComponent,
    FilterCriteriaComponent,
    ConvertBooleanToStringPipe,
    CommonModule,
    FormsModule   
  ]
})
export class SharedModule { }
