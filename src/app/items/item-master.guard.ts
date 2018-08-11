import { Injectable } from '@angular/core';
import {  CanDeactivate, CanActivate, ActivatedRouteSnapshot,  Router } from '@angular/router';
import { ItemMasterComponent } from './item-master.component';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})


export class ItemMasterGuard implements CanDeactivate<ItemMasterComponent>,CanActivate { 
  
  constructor(private router: Router){    
  }

  canDeactivate(component: ItemMasterComponent):boolean {
    if (component.itemForm.dirty){
     return confirm(`Navigate away will lose all information`);
    }
    return true; 
  }

  canActivate(next: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      const id =+ next.url[1].path;
      if (id.toString().length === 0){       
        this.router.navigate(['/welcome']);
      } 
       //can include any user access checks code here.     
      return true;
  } 

}
