import { Component, OnInit, OnDestroy } from '@angular/core';
import { IOrder } from '../order';
import { OrderService } from '../order.service';
import { CustomerService } from '../../shared/customer.service';
import { OrderParameterService } from '../../shared/order-parameter/order-parameter.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({ 
  templateUrl: './order-list-component.html',
  styleUrls: ['./order-list-component.css']
})

export class OrderListComponent implements OnInit,OnDestroy {
   
  orders: IOrder[] = null;
  filteredOrders: IOrder[] = null; 
  errors: string[] = null;
  private sub:Subscription = null;


constructor(private orderService: OrderService, private customerService: CustomerService,
  private orderParamterService: OrderParameterService){ }

onOrderValueChange(value: string): void{  
  this.filteredOrders = this.performListFilter(value,this.orderParamterService.Order_filterByCustomer);   
}
onCustomerValueChange(value: string): void{   
  this.filteredOrders = this.performListFilter(this.orderParamterService.Order_filterByOrder,value);      
}
onOrderIdclicked(id: number){
  this.orderService.changeSelectedOrder(this.filteredOrders.find(x => x.ID === id))   
}
performListFilter(orderValue: string,customerValue: string): IOrder[]{      
  if ((orderValue && orderValue.length>0) && (customerValue && customerValue.length)>0){
    return this.orders.filter((order: IOrder) => ((order.OrderNumber.toLocaleLowerCase().indexOf(orderValue) !== -1) &&
    order.CustomerName.toLocaleLowerCase().indexOf(customerValue) !== -1));
  }else if (orderValue && orderValue.length>0){
    return this.orders.filter((order: IOrder) => (order.OrderNumber.toLocaleLowerCase().indexOf(orderValue) !== -1));
  }else if (customerValue && customerValue.length>0){
    return this.orders.filter((order: IOrder) => (order.CustomerName.toLocaleLowerCase().indexOf(customerValue) !== -1));
  }else{
    return this.orders;
  }
} 

formatData(orderList: IOrder[]): IOrder[]{
  orderList.forEach(element => {      
    element.CustomerName=this.customerService.getCustomerName(element.CustomerNumber);  
    element.FreightPaymentName = (element.FreightPayCodeLiteral.find(x => x.Key.
      toLocaleLowerCase() === element.FreightPaymentCode.toLocaleLowerCase()).Value);
    element.MessagesStr = element.Messages.join(',');
  });
  return orderList;
}

ngOnInit() {
 this.sub = this.orderService.getOrdersAsync().subscribe(
    orders => {
    this.orders = this.formatData(orders); 
    this.filteredOrders = this.performListFilter(this.orderParamterService.Order_filterByOrder, 
      this.orderParamterService.Order_filterByCustomer);              
    },
  error => this.errors = <any>error      
  );
} 

ngOnDestroy(){
  this.sub.unsubscribe();
}

}
