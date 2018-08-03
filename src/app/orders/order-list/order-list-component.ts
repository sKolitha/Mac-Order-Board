import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IOrder } from '../order';
import { OrderService } from '../order.service';
import { CustomerService } from '../../shared/customer.service';

import { OrderParameterService } from '../order-parameter/order-parameter.service';
import { Router } from '@angular/router';
import { FilterCriteriaComponent } from '../../shared/filter-criteria/filter-criteria.component';

@Component({ 
  templateUrl: './order-list-component.html',
  styleUrls: ['./order-list-component.css']
})
export class OrderListComponent implements OnInit,AfterViewInit {

  orders : IOrder[] = [];
  filteredOrders : IOrder[] = []; 
  errors : string;

  @ViewChild(FilterCriteriaComponent)filterComponent :FilterCriteriaComponent;
  parentOrderByFilter:string;
  parentCustomerByFilter:string;

  constructor(private orderService:OrderService, 
    private customerService:CustomerService,
    private orderParamterService:OrderParameterService,
    private router:Router){ }

    onOrderValueChange(value :string):void{    
      this.filteredOrders=this.performOrderFilter(value);   
    }
    onCustomerValueChange(value :string):void{ 
      this.filteredOrders=this.performCustomerFilter(value);      
    }

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
      element.CustomerName=this.customerService.getCustomerName(element.CustomerNumber);  
      element.FreightPaymentName=(element.FreightPayCodeLiteral.find(x=>x.Key.toLocaleLowerCase()==element.FreightPaymentCode.toLocaleLowerCase()).Value);
      element.MessagesStr=element.Messages.join("/");
    });
    return orderList;
 }
 
 ngOnInit() {
    this.orderService.getOrdersAsync().subscribe(
      orders=>{
        this.orders=this.formatData(orders); 
        this.filteredOrders = this.orders;              
      },
      error=>this.errors=<any>error      
    );
   
  }
ngAfterViewInit():void{ 
  /*this.parentOrderByFilter=this.filterComponent.filterByOrder;
  this.filteredOrders = this.parentOrderByFilter?this.performOrderFilter(this.parentOrderByFilter):this.orders;
  this.parentCustomerByFilter=this.filterComponent.filterByCustomer;
  this.filteredOrders = this.parentCustomerByFilter?this.performCustomerFilter(this.parentCustomerByFilter):this.orders;
*/
}
  orderidclicked(id:number){
    this.orderService.changeSelectedOrder(this.filteredOrders.find(x=>x.ID==id))   
    this.router.navigate(['/orders',id]);
  }
/*
    get filterByOrder() : string {
      return this.orderParamterService.filterByOrder;
    }
    set filterByOrder(value:string){
     // this._filterByCustomer ='';
      this.orderParamterService.filterByOrder = value;
      this.filteredOrders = this.filterByOrder?this.performOrderFilter(this.filterByOrder):this.orders;
    }

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
    //this._filterByOrder = '';
    this._filterByCustomer = value;
    this.filteredOrders = this.filterByCustomer?this.performCustomerFilter(this.filterByCustomer):this.orders;
  }
  
 */
}
