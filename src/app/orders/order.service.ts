import { Injectable } from "../../../node_modules/@angular/core";
import { IOrder } from "./order";
import { HttpClient, HttpErrorResponse } from "../../../node_modules/@angular/common/http";
import { Observable, throwError,BehaviorSubject } from "../../../node_modules/rxjs";
import {catchError,tap, map} from "../../../node_modules/rxjs/operators";


@Injectable({
providedIn:"root"
})
export class OrderService{

    currentorder:IOrder;
    private orderJsonUrl='api/orders/orderdatastructure.json';
      
    private orderSource=new BehaviorSubject(this.currentorder);
    currentMessage=this.orderSource.asObservable();

    constructor(private http:HttpClient){}
    
    changeOrders(curorder :IOrder){
        this.orderSource.next(curorder);
    }

    getOrdersAsync():Observable<IOrder[]>{
       return this.http.get<IOrder[]>(this.orderJsonUrl).pipe(
           map(data=>data["data"]),
           tap(data=>{
               this.currentorder=data[0];
               console.log("All"+JSON.stringify(data))
            }),
           catchError(this.errorHandler)
       );
    }    
    private errorHandler(err:HttpErrorResponse){
        let errMessage = '';

        if (err.error instanceof ErrorEvent){
            errMessage = 'error occured :'+ err.error.message;
        }
        else{
            errMessage = 'error status code :' + err.status+', message is : ' + err.message;
        }

        console.log(errMessage);
        return throwError(errMessage);
    }
}
