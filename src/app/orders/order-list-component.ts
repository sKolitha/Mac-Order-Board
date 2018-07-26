import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orderlist',
  templateUrl: './order-list-component.html',
  styleUrls: ['./order-list-component.css']
})
export class OrderListComponent implements OnInit {
  listFilter:string='a';
  orders:any[]=[{
    "ID": 20062,
    "OrderDate": "2018-04-25T00:00:00",
    "OrderNumber": "135",
    "OrderType": "O",
    "CustomerNumber": "bbb"  
  },
  {
    "ID": 20063,
    "OrderDate": "2018-04-25T00:00:00",
    "OrderNumber": "235",
    "OrderType": "O",
    "CustomerNumber": "aaa"  
  }];
  constructor() { }

  ngOnInit() {
  }

}
