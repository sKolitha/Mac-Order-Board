import { Component, OnInit } from '@angular/core';
import { IOrder } from './order';
import { OrderService } from './order.service';
import { CustomerService } from '../shared/customer.service';

@Component({ 
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
  constructor(private orderService:OrderService, private customerService:CustomerService){ }

 performOrderFilter(filterBy:string) : IOrder[]{
    filterBy = filterBy.toLocaleLowerCase();    
    return this.orders.filter((order : IOrder) => order.OrderNumber.toLocaleLowerCase().indexOf(filterBy) !== -1);
 } 
 performCustomerFilter(filterBy:string) : IOrder[]{
  filterBy = filterBy.toLocaleLowerCase(); 

  return this.orders.filter((order : IOrder) => order.CustomerName.toLocaleLowerCase().indexOf(filterBy) !== -1);
 } 
 
 formatData(orderList:IOrder[]):IOrder[]{
    orderList.forEach(element => {
    element.CustomerName=this.customerService
    .getCustomerName(element.CustomerNumber);     
    });
    return orderList;
 }
 
 ngOnInit() {
    this.orderService.getOrdersAsync().subscribe(
      orders=>{
        this.orders=this.formatData(orders);
        this.filteredOrders = this.orders;
        this.filterByOrder = "";
        this.filterByCustomer="";
      },
      error=>this.errors=<any>error      
    );
   
  }

}
