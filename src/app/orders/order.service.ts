
import { IOrder } from "./order";
import { Injectable } from "@angular/core";
import { BehaviorSubject, of} from "rxjs";
import { HttpErrorResponse, HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { ErrorService } from "../error/error.service";

@Injectable({
    providedIn:"root"
})

export class OrderService{

    private orderJsonUrl='api/orders/orderdatastructure.json'; 
    private currentOrder:IOrder;     
    private orderSource=new BehaviorSubject<IOrder|null>(this.currentOrder);  
    private listOfOrders:IOrder[];

    constructor(private http:HttpClient, private errorService:ErrorService){}

    selectedOrderChanges$=this.orderSource.asObservable();   

    changeSelectedOrder(curorder :IOrder|null){
        this.orderSource.next(curorder);
    }

    getOrdersAsync():Observable<IOrder[]>{
        /*Data in this app is not critical, so no need to 
            go to server every time to get data from server.
        */
        if (this.listOfOrders){
            return of(this.listOfOrders);           
        }
       return this.http.get<IOrder[]>(this.orderJsonUrl).pipe(
            map(data=>data["data"]),
            tap(data=>this.currentOrder=data[0]),
            tap(data=>this.listOfOrders=data),                     
                //console.log("All"+JSON.stringify(data)))
            catchError(this.errorService.errorHandler)
       );
    }    
    
}
