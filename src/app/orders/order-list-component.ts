import { Component, OnInit } from '@angular/core';
import { IOrder } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './order-list-component.html',
  styleUrls: ['./order-list-component.css']
})
export class OrderListComponent implements OnInit {

  orders : IOrder[] = [];
  filteredOrders : IOrder[] = [];

  _listFilter : string = '';
  get listFilter() : string {
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filteredOrders = this.listFilter?this.performFilter(this.listFilter):this.orders;
  }

  performFilter(filterBy:string) : IOrder[]{
    filterBy = filterBy.toLocaleLowerCase();    
    return this.orders.filter((order : IOrder) => order.orderNumber.toLocaleLowerCase().indexOf(filterBy) !== -1);
 } 


  constructor(private orderService:OrderService){
   
  }
  ngOnInit() {
    this.orders = this.orderService.getOrders();
    this.filteredOrders = this.orders;
    this.listFilter = "";
  }

}
