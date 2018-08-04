import { Component, OnInit, OnDestroy } from '@angular/core';
import { IOrderLine } from '../orderline';
import { Subscription } from '../../../../node_modules/rxjs';
import { OrderLineService } from '../orderline.service';
import { ActivatedRoute, Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-orderline-detail',
  templateUrl: './orderline-detail.component.html',
  styleUrls: ['./orderline-detail.component.css']
})
export class OrderlineDetailComponent implements OnInit,OnDestroy {
  pageTitle:string='Order Line ID';
  orderLine:IOrderLine;
  sub:Subscription;

constructor(private orderLineService: OrderLineService,
    private route:ActivatedRoute,private router:Router) { }  

  ngOnInit() {

    this.sub=this.orderLineService.selectedOrderLineChanges$.subscribe(orderline=>this.orderLine=orderline);
    
    if (!this.orderLine){
      this.onBack();
    }

    let id=+this.route.snapshot.paramMap.get('Id');
    this.pageTitle+=`: ${id==null ? "" : id}`;
  }

  onBack(): void {
    this.router.navigate(['/orderlines']);
  }
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
}