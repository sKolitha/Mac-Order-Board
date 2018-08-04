import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderlineListComponent } from './orderline-list/orderline-list.component';
import { RouterModule } from '../../../node_modules/@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OrderlineDetailComponent } from './orderline-detail/orderline-detail.component';
import { OrderParameterService } from '../orders/order-parameter/order-parameter.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'orderlines',component:OrderlineListComponent },
      {
        path:'orderlines/:Id',
        //canActivate:[OrderDetailGuard],
        component:OrderlineDetailComponent
       }
     // {path:'orderline',component:OrderListComponent }     
    ]),
    SharedModule
  ],
  declarations: [
    OrderlineListComponent,
    OrderlineDetailComponent
  ],
  providers:[
    OrderParameterService
  ]
})

export class OrdrlineModule { }
