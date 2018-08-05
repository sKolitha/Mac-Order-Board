import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemMasterComponent } from './item-master.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemMasterGuard } from './item-master.guard';

@NgModule({
  imports: [    
    RouterModule.forChild([
      {path:'items',
      canDeactivate:[ItemMasterGuard],
      component:ItemMasterComponent }      
    ]),    
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    ItemMasterComponent
  ],
  providers:[ItemMasterGuard]
})
export class ItemModule { }
