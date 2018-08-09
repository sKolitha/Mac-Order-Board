import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { IOrderLine } from './orderline';
import { tap, catchError } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class OrderLineService {

  private orderLineJsonUrl='api/orders/orderlineitem.json'; 
  private listOfOrderLines : IOrderLine[]=null;
  private currentOrderLine:IOrderLine=null;
  private orderLineSource=new BehaviorSubject<IOrderLine|null>(this.currentOrderLine);


  constructor(private http:HttpClient,private errorService:ErrorService) { }

  selectedOrderLineChanges$=this.orderLineSource.asObservable();
  changeSelctedOrderLine(curOrderLine :IOrderLine|null){
    this.orderLineSource.next(curOrderLine);
  }

  getOrderLinesAsync():Observable<IOrderLine[]>{
    /*Data in this app is not critical, so no need to 
      go to server every time to get data from server.
    */
    if (this.listOfOrderLines){
      return of(this.listOfOrderLines);
    }
    
    return this.http.get<IOrderLine[]>(this.orderLineJsonUrl).pipe(
      tap(data=>this.listOfOrderLines===data),
      catchError(this.errorService.errorHandler)
    );
  }

}
