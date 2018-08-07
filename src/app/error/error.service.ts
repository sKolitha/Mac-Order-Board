import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

   errorHandler(err:HttpErrorResponse){
    let errMessage = '';

    if (err.error instanceof ErrorEvent){
        errMessage = `error occured :${err.error.message}`;
    }
    else{
        errMessage = `error status code :${ err.status}, message is :${err.message}`;
    }  
    return throwError(errMessage);
}
}
