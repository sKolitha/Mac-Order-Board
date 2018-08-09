import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {IOrder} from '../order';
import { OrderService } from '../order.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})

export class OrderDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Order ID';
  order: IOrder=null;
  errors: string[]=null;
  sub: Subscription=null;

  constructor(private route:ActivatedRoute,private router:Router,
    private orderService: OrderService) { }
  
  ngOnInit() {

    this.sub= this.orderService.selectedOrderChanges$.
    subscribe(
      ord=>this.order=ord,
      err=>this.errors=<any>err
    );
    
    if (!this.order){
      this.onBack();
    }
    const id=+this.route.snapshot.paramMap.get('Id');
    this.pageTitle+=`: ${id==null ? '' : id}`;
  }

  onBack(): void {
    this.router.navigate(['/orders']);
  }

  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
}
