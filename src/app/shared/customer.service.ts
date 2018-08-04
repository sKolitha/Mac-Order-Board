import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
/*
Becuase there is no json file for customers, just use this array to keep the list of
customers.
*/
  customers:any[] = [
    {id: '904', name:'Nissan'},
    {id: '905', name:'FORD'},
    {id: '800', name:'ABC Supply'},
    {id: '102', name:'TOYOTA'},
    {id: '245', name:'PQR Builders'}
  ];

  constructor() { }

  getCustomerName(id:string):string
  {

    let customer=this.customers.find(x=>x.id===id.trim());
        if (customer){
            return customer.name ||id;
        }
        else{
            return id;
        }
  }
}
