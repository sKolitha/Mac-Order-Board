import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
/*
Because there is no json file for customers, just use this array to maintain
customer master data.
*/
  customers:any[] = [
    {id: '904', name:'Nissan'},
    {id: '905', name:'FORD'},
    {id: '800', name:'ABC Supply'},
    {id: '102', name:'TOYOTA'},
    {id: '245', name:'PQR Builders'}
  ];
  
  getCustomerName(id:string):string
  {

    const customer=this.customers.find(x=>x.id===id.trim());
        if (customer){
            return customer.name || id;
        }else{
            return id;
        }
  }
}
