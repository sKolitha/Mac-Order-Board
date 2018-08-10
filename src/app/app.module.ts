import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { OrderModule } from './orders/order.module';
import { OrdrlineModule } from './orderlines/ordrline.module';
import { ItemModule } from './items/item.module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    BrowserModule,
    HttpClientModule,
    OrderModule,
    OrdrlineModule,
    ItemModule
  ],
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
