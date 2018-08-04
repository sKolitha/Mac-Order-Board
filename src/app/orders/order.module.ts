import { NgModule } from '@angular/core';
import { OrderListComponent } from './order-list/order-list-component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderDetailGuard } from './order-detail/order-detail.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { OrderParameterService } from './order-parameter/order-parameter.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path:'orders',component:OrderListComponent },
      {
        path:'orders/:Id',
        //canActivate:[OrderDetailGuard],
        component:OrderDetailComponent
      }
     // {path:'orderline',component:OrderListComponent }     
    ]),
    SharedModule
   
  ],
  declarations: [
    OrderListComponent,
    OrderDetailComponent
  
  ],
  providers:[
    OrderParameterService
  ]
})
export class OrderModule { }
