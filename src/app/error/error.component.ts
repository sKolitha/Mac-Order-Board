import { Component, OnInit } from '@angular/core';
import { OrderService } from '../orders/order.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  errors:string='';

  constructor(private orderService : OrderService) { }

  ngOnInit() {
    //this.errors=this.orderService;
    
    
  }

}
