import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { OrderModule } from './orders/order.module';
import { ErrorComponent } from './error/error.component';
import { OrdrlineModule } from './orderlines/ordrline.module';
import { ItemModule } from './items/item.module';

@NgModule({
  declarations: [   
    AppComponent,    
    WelcomeComponent,     
    ErrorComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    RouterModule.forRoot([     
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ]),
    OrderModule,
    OrdrlineModule,
    ItemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
