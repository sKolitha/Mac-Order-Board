import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ICustomerordercomment } from '../../orders/order';

@Component({
  selector: 'app-customer-comment',
  templateUrl: './customer-comment.component.html',
  styleUrls: ['./customer-comment.component.css']
})
export class CustomerCommentComponent implements OnChanges {

  @Input() comments : ICustomerordercomment[]=[];  
  customerordercomments:ICustomerordercomment[]=[];
  constructor() { }

  ngOnChanges():void {
    this.customerordercomments=this.comments;
  }

  

}
