import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import {FormsModule} from "@angular/forms";
import { PriceQuoteComponent } from './price-quote/price-quote.component';
import { LifeComponent } from './life/life.component';
import { ChatComponent } from './chat/chat.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import { Child4Component } from './child4/child4.component';
import { Child6Component } from './child6/child6.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    PriceQuoteComponent,
    LifeComponent,
    ChatComponent,
    ChildComponent,
    Child2Component,
    Child4Component,
    Child6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 双向绑定必须要引入FormsModule
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
