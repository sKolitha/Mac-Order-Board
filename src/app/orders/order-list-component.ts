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
  errors : string;

  _filterByOrder : string = '';
  get filterByOrder() : string {
    return this._filterByOrder;
  }
  set filterByOrder(value:string){
    this._filterByCustomer ='';
    this._filterByOrder = value;
    this.filteredOrders = this.filterByOrder?this.performOrderFilter(this.filterByOrder):this.orders;
  }

  _filterByCustomer : string = '';
  get filterByCustomer() : string {
    return this._filterByCustomer;
  }
  set filterByCustomer(value:string){
    this._filterByOrder = '';
    this._filterByCustomer = value;
    this.filteredOrders = this.filterByCustomer?this.performCustomerFilter(this.filterByCustomer):this.orders;
  }
  constructor(private orderService:OrderService){
   
  }

  performOrderFilter(filterBy:string) : IOrder[]{
    filterBy = filterBy.toLocaleLowerCase();    
    return this.orders.filter((order : IOrder) => order.OrderNumber.toLocaleLowerCase().indexOf(filterBy) !== -1);
 } 
 performCustomerFilter(filterBy:string) : IOrder[]{
  filterBy = filterBy.toLocaleLowerCase();    
  return this.orders.filter((order : IOrder) => order.CustomerNumber.toLocaleLowerCase().indexOf(filterBy) !== -1);
} 
  ngOnInit() {
    //this.orders = this.orderService.getOrders();
    this.orderService.getOrdersAsync().subscribe(
      orders=>{
        this.orders=orders;
        this.filteredOrders = this.orders;
        this.filterByOrder = "";
        this.filterByCustomer="";
      },
      error=>this.errors=<any>error      
    );
   
  }

}
