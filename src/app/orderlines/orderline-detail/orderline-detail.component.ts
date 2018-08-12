import { Component, OnInit, OnDestroy } from '@angular/core';
import { IOrderLine } from '../orderline';
import { Subscription } from 'rxjs';
import { OrderLineService } from '../orderline.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orderline-detail',
  templateUrl: './orderline-detail.component.html',
  styleUrls: ['./orderline-detail.component.css']
})
export class OrderlineDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'LINE DETAILS FOR ORDER';
  orderLine: IOrderLine = null;
  sub: Subscription = null;
  errors: string[] = null;

constructor(private orderLineService: OrderLineService,
    private route: ActivatedRoute, private router: Router){ }  

  ngOnInit() {

    this.sub = this.orderLineService.selectedOrderLineChanges$.
    subscribe(
      orderline => this.orderLine = orderline,
      err => this.errors = <any>err
    );
    if (!this.orderLine) {
      this.onBack();
    }

    const id = +this.route.snapshot.paramMap.get('Id');
    this.pageTitle += `: ${id === null ? '' : id}`;
  }

  onBack(): void {
    this.router.navigate(['/orderlines']);
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
