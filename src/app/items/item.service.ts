import { Injectable } from '@angular/core';

import { IItem } from './item';
import { Observable, observable } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { catchError, map } from '../../../node_modules/rxjs/operators';
import { ErrorService } from '../error/error.service';
import { ObserveOnOperator } from '../../../node_modules/rxjs/internal/operators/observeOn';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemJsonUrl='api/orders/itemdata.json'; 

  constructor(private http:HttpClient,
  private errorService:ErrorService){ }

  getItemAsync(number:string):Observable<IItem>{

    if (number===""){
      return Observable.create((observer:any)=>{
        observer.next(this.initItem());
        observer.complete();
        });
    }
    else{
      return this.http.get<IItem[]>(this.itemJsonUrl).pipe( 
      map(data=>data.find(x=>x.ItemNumber.toLocaleLowerCase()==number.toLocaleLowerCase())),
      catchError(this.errorService.errorHandler)
      );
    }
    
  }

 /*  private extraxtData(response:Response){
    let data=response.json();
    return data || {};
  } */

  initItem():IItem{
    return {
      ItemNumber:null,
      ItemDescription1:null,
      ItemDescription2:null,
      ItemReleaseNumber:null,
      EndItemCode:null,
      ProductCategory:null,
      UnitOfMeasure:null,
      IsActive:false      
    }
  }
}
