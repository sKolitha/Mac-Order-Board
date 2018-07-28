import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { OrderListComponent } from './orders/order-list-component';
import { WelcomeComponent } from './home/welcome.component';
import { OrderDetailComponent } from './orders/order-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    WelcomeComponent,
    OrderDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'orders',component:OrderListComponent },
      {path:'orders/:Id',component:OrderDetailComponent},
      {path:'welcome',component:WelcomeComponent}      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
