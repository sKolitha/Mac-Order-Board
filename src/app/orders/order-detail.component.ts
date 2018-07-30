import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Router   } from '../../../node_modules/@angular/router';
import {IOrder} from './order';
import { OrderService } from './order.service';

@Component({ 
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  pageTitle:string='Order ID';
  order:IOrder;

  constructor(private route:ActivatedRoute,private router:Router,
    private orderService:OrderService) {}

  
  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get('Id');
    this.pageTitle+=`: ${id}`;
    this.orderService.currentMessage.subscribe(ord=>this.order=ord);
  }
  onBack(): void {
    this.router.navigate(['/orders']);
  }
}
