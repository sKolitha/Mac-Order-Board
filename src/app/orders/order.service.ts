import { Injectable } from "../../../node_modules/@angular/core";
import { IOrder } from "./order";

@Injectable({
providedIn:"root"
})
export class OrderService{
    getOrders():IOrder[]{
        return [{
            'Id': 20062,
            'orderDate': '2018-04-25T00:00:00',
            'orderNumber': '20001',
            'orderType': 'O',
            'customerNumber': 'Ford'  
          },
          {
            'Id': 20062,
            'orderDate': '2018-04-25T00:00:00',
            'orderNumber': '20003',
            'orderType': 'O',
            'customerNumber': 'ABC'  
          }];

    }

}
