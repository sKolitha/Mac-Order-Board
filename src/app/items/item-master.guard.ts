import { Injectable } from '@angular/core';
import {  CanDeactivate, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ItemMasterComponent } from './item-master.component';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})


export class ItemMasterGuard implements CanDeactivate<ItemMasterComponent>,CanActivate {

  constructor(private router:Router){
    
  }
  
  canDeactivate(component: ItemMasterComponent):boolean {
    if (component.itemForm.dirty){
     // let itemNumbr=component.itemForm.get('itemNumber').value || "New Item";
     /*  return confirm(`Navigate away will lose all information ${{itemNumbr}}`); */
     return confirm(`Navigate away will lose all information`);
    }
    return true; 
  }

  canActivate(next: ActivatedRouteSnapshot,
     state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
     /* let id=+next.url[1].path;
      if (isNaN(id)||id<1){
        this.router.navigate(['/orderlines']);
      }  */
      return true;
  }

}
