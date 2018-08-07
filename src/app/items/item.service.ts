import { Injectable } from '@angular/core';
import { IItem } from './item';
import { Observable, of } from '../../../node_modules/rxjs';
import { HttpClient, HttpHeaders } from '../../../node_modules/@angular/common/http';
import { catchError, map } from '../../../node_modules/rxjs/operators';
import { ErrorService } from '../error/error.service';


@Injectable({
  providedIn: 'root'
})

export class ItemService {

  private itemJsonUrl='api/orders/itemdata.json'; 

  /* private baseAPIUrl='WWW.M1.com/API/orders';
  private const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }; */

  constructor(private http:HttpClient, private errorService:ErrorService){ }

  getItemAsync(number:string):Observable<IItem>{    
      return this.http.get<IItem[]>(this.itemJsonUrl).pipe( 
      map(data=>data.find(x=>x.ItemNumber.toLocaleLowerCase()===number.toLocaleLowerCase())),
      catchError(this.errorService.errorHandler)
      );
  } 
  
  updateItemAsync(item:IItem):Observable<IItem>{      
    
    //valid code would be something like this    
    /* const url=`${this.baseAPIUrl}/${item.ItemNumber}`;
    return this.http.put(url,item,this.httpOptions).pipe(
      map(()=>item),
      catchError(this.errorService.errorHandler)
    ); */
    return of(item);
  }   

  addItemAsync(item:IItem):Observable<IItem>{
    //valid code would be something like this    
    
   /*  return this.http.post<IItem>(this.baseAPIUrl,item,this.httpOptions).pipe(     
      catchError(this.errorService.errorHandler)
    );  */
    return of(item);
  }    

 /*  Didn't try to build/create a fake API because  
      it would take considerable amount of time.       
  */

  
}
