import { NgModule } from '@angular/core';
import { OrderListComponent } from './order-list/order-list-component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderDetailGuard } from './order-detail/order-detail.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'orders',component:OrderListComponent },
      {
        path:'orders/:Id',
        //canActivate:[OrderDetailGuard],
        component:OrderDetailComponent
      }     
    ]),
    SharedModule
   
  ],
  declarations: [
    OrderListComponent,
    OrderDetailComponent  
  ],
  providers:[]
})
export class OrderModule { }
