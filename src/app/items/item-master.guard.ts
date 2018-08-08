import { Injectable } from '@angular/core';
import {  CanDeactivate, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ItemMasterComponent } from './item-master.component';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})


export class ItemMasterGuard implements CanDeactivate<ItemMasterComponent>,CanActivate { 
  
  canDeactivate(component: ItemMasterComponent):boolean {
    if (component.itemForm.dirty){
     return confirm(`Navigate away will lose all information`);
    }
    return true; 
  }

  canActivate(next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
       //can include any user access checks code here.     
      return true;
  }

}
