import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderParameterService {

  filterByOrder:string;

  constructor() { }
}
