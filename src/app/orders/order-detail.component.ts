import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute,Router   } from '../../../node_modules/@angular/router';
import {IOrder} from './order';

@Component({ 
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  pageTitle:string='Order Details';
  order:IOrder;

  constructor(private route:ActivatedRoute,private router:Router,) {

    console.log(this.route.snapshot.paramMap.get(":id"));
   }

  ngOnInit() {
    let id=+this.route.snapshot.paramMap.get(":id");
  }
  onBack(): void {
    this.router.navigate(['/orders']);
  }
}
