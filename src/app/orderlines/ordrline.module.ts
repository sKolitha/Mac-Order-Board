import { NgModule } from '@angular/core';
import { OrderlineListComponent } from './orderline-list/orderline-list.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OrderlineDetailComponent } from './orderline-detail/orderline-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'orderlines' ,component: OrderlineListComponent },
      {
        path: 'orderlines/:Id',         
        component: OrderlineDetailComponent
       }              
    ]),
    SharedModule
  ],
  declarations: [
    OrderlineListComponent,
    OrderlineDetailComponent
  ]
})

export class OrdrlineModule { }
