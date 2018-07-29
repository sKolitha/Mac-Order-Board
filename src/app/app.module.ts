import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Input } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { OrderModule } from './orders/order.module';


@NgModule({
  declarations: [
    AppComponent,    
    WelcomeComponent
  ],
  imports: [
    BrowserModule,    
    HttpClientModule,
    RouterModule.forRoot([     
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
      {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ]),
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
