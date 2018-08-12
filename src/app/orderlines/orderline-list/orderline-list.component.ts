import { Component, OnInit, OnDestroy } from '@angular/core';
import { IOrderLine } from '../orderline';
import { OrderLineService } from '../orderline.service';
import { CustomerService } from '../../shared/customer.service';
import { OrderParameterService } from '../../shared/order-parameter/order-parameter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-orderline-list',
  templateUrl: './orderline-list.component.html',
  styleUrls: ['./orderline-list.component.css']
})
export class OrderlineListComponent implements OnInit,OnDestroy {

  errors: string[] = null;
  orderLines: IOrderLine[] = null;
  filteredOrderLines: IOrderLine[];

  private sub: Subscription = null;

  constructor(private orderLineService: OrderLineService,
    private orderParamterService:OrderParameterService,private customerService: CustomerService) { }

  performListFilter(orderValue: string,customerValue: string): IOrderLine[]{      
    if ((orderValue && orderValue.length>0) && (customerValue && customerValue.length)>0){
      return this.orderLines.filter((orderLine: IOrderLine) => ((orderLine.OrderNumber.toLocaleLowerCase().indexOf(orderValue) !== -1) &&
      orderLine.CustomerName.toLocaleLowerCase().indexOf(customerValue) !== -1));
    }else if (orderValue && orderValue.length>0){
      return this.orderLines.filter((orderLine: IOrderLine) => (orderLine.OrderNumber.toLocaleLowerCase().indexOf(orderValue) !== -1));
    }else if (customerValue && customerValue.length>0){
      return this.orderLines.filter((orderLine: IOrderLine) => (orderLine.CustomerName.toLocaleLowerCase().indexOf(customerValue) !== -1));
    }else{
      return this.orderLines;
    }
  } 

  onOrderValueChange(value: string): void{    
    this.filteredOrderLines = this.performListFilter(value,this.orderParamterService.Orderline_filterByCustomer);   
  }
  onCustomerValueChange(value: string): void{ 
    this.filteredOrderLines = this.performListFilter(this.orderParamterService.Orderline_filterByOrder,value);      
  }

  onOrderLineIdClicked(id: string): void{
    this.orderLineService.changeSelctedOrderLine(this.filteredOrderLines.find(x => x.OrderKey === id));
  }
  formatData(orderLineList: IOrderLine[]): IOrderLine[]{
    orderLineList.forEach(element => {    
      element.CustomerName = this.customerService.getCustomerName(element.CustomerNumber);
      element.OrderKey = element.OrderNumber.concat(element.LineNumber.toString().trim()
        .concat(element.LineSequenceNumber.toString().trim()));
      element.MessagesStr = element.Messages.join(',');
    });
    return orderLineList;
  }

  ngOnInit() {
    this.sub = this.orderLineService.getOrderLinesAsync().subscribe(
      orderlines => {
      this.orderLines = this.formatData(orderlines); 
      this.filteredOrderLines = this.performListFilter(this.orderParamterService
        .Orderline_filterByOrder,this.orderParamterService.Orderline_filterByCustomer);              
      },
    error=>this.errors=<any>error      
  );
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
