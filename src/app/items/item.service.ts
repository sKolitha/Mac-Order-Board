import { Injectable } from '@angular/core';
import { IItem } from './item';
import { Observable } from '../../../node_modules/rxjs';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { catchError, map } from '../../../node_modules/rxjs/operators';
import { ErrorService } from '../error/error.service';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemJsonUrl='api/orders/itemdata.json'; 

  constructor(private http:HttpClient, private errorService:ErrorService){ }

  getItemAsync(number:string):Observable<IItem>{    
      return this.http.get<IItem[]>(this.itemJsonUrl).pipe( 
      map(data=>data.find(x=>x.ItemNumber.toLocaleLowerCase()==number.toLocaleLowerCase())),
      catchError(this.errorService.errorHandler)
      );
  }
    
  
  

 /*  private extraxtData(response:Response){
    let data=response.json();
    return data || {};
  } */

  
}
