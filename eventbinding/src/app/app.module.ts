import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindComponent } from './bind/bind.component';
import { Bind1Component } from './bind1/bind1.component';
import {ReactiveFormsModule} from "@angular/forms";
import { Bind3Component } from './bind3/bind3.component';
import { PipingComponent } from './piping/piping.component';
import { MultiplePipe } from './pipe/multiple.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BindComponent,
    Bind1Component,
    Bind3Component,
    PipingComponent,
    MultiplePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 做响应式编程的一个模块
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
