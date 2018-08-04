import { Injectable } from '@angular/core';

@Injectable(
  {
  providedIn: 'root'
}
)
export class OrderParameterService {

  filterByOrder:string;
  filterByCustomer:string;

  constructor() { }
}
