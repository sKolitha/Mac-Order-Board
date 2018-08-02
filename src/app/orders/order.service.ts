import { Injectable } from "../../../node_modules/@angular/core";
import { IOrder } from "./order";
import { HttpClient, HttpErrorResponse } from "../../../node_modules/@angular/common/http";
import { Observable, throwError,BehaviorSubject, of } from "../../../node_modules/rxjs";
import {catchError,tap, map} from "../../../node_modules/rxjs/operators";

@Injectable({
providedIn:"root"
})
export class OrderService{

    private orderJsonUrl='api/orders/orderdatastructure.json'; 
    private currentorder:IOrder;     
    private orderSource=new BehaviorSubject<IOrder|null>(this.currentorder);  
    private listOfOrders:IOrder[];

    constructor(private http:HttpClient){}

    selectedorderchanges$=this.orderSource.asObservable();   

    changeSelectedOrder(curorder :IOrder|null){
        this.orderSource.next(curorder);
    }

    getOrdersAsync():Observable<IOrder[]>{
        if (this.listOfOrders){
            return of(this.listOfOrders);
           /*Data in this app is not critical, so no need to 
            go to server every time to get data.
           */
        }
       return this.http.get<IOrder[]>(this.orderJsonUrl).pipe(
            map(data=>data["data"]),
            tap(data=>this.currentorder=data[0]),
            tap(data=>this.listOfOrders=data),                     
                //console.log("All"+JSON.stringify(data)))
            catchError(this.errorHandler)
       );
    }    
    private errorHandler(err:HttpErrorResponse){
        let errMessage = '';

        if (err.error instanceof ErrorEvent){
            errMessage = `error occured :${err.error.message}`;
        }
        else{
            errMessage = `error status code :${ err.status}, message is :${err.message}`;
        }

        //console.log(errMessage);
        return throwError(errMessage);
    }
}
