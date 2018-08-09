import { Injectable } from '@angular/core';

@Injectable(
  {
  providedIn: 'root'
}
)
export class OrderParameterService {

  Order_filterByOrder:string="";
  Order_filterByCustomer:string="";
  Orderline_filterByOrder:string="";
  Orderline_filterByCustomer:string="";
  
}
