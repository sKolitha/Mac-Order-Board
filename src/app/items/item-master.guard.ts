import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ItemMasterComponent } from './item-master.component';

@Injectable({
  providedIn: 'root'
})
export class ItemMasterGuard implements CanDeactivate<ItemMasterComponent> {
  canDeactivate(component: ItemMasterComponent):boolean {
    if (component.itemForm.dirty){
      //let itemNumbr=component.itemForm.get('itemNumber').value || "New Item";
      return confirm("Navigate away will lose all information");
    }
    return true; 
  }
}
