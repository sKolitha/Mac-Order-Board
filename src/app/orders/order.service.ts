import { Injectable } from "../../../node_modules/@angular/core";
import { IOrder } from "./order";
import { HttpClient, HttpErrorResponse } from "../../../node_modules/@angular/common/http";
import { Observable, throwError } from "../../../node_modules/rxjs";
import {catchError,tap} from "../../../node_modules/rxjs/operators";


@Injectable({
providedIn:"root"
})
export class OrderService{

    private orderJsonUrl='api/orders/orderdata.json';    
    constructor(private http:HttpClient){

    }
    getOrdersAsync():Observable<IOrder[]>{
       return this.http.get<IOrder[]>(this.orderJsonUrl).pipe(
           tap(data=>console.log("All"+JSON.stringify(data))),
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
