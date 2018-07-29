import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '../../../node_modules/@angular/router';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { OrderListComponent } from './order-list-component';
import { OrderDetailComponent } from './order-detail.component';
import {ConvertCustomerIdToNamePipe} from '../shared/convertcustId-to-name.pipe';
import { OrderDetailGuard } from './order-detail.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    RouterModule.forChild([

      {path:'orders',component:OrderListComponent },
      {
        path:'orders/:Id',
        canActivate:[OrderDetailGuard],
        component:OrderDetailComponent}      
    ])
   // {path:'orderline',component:OrderListComponent }
  ],
  declarations: [
    OrderListComponent,
    OrderDetailComponent,
    ConvertCustomerIdToNamePipe
  ]
})
export class OrderModule { }
