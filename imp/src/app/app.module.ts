import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import {ProductService} from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import {LoggerService} from './shared/logger.service';
import {OtherproductService} from './shared/otherproductservice.service';

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // 提供器模块声明
  // providers: [ProductService, LoggerService],
  // 工厂模式实例化ProductService, useFactory就是工厂函数
  // 工厂函数调用如果发现需要依赖另一个服务LoggerService，和appConfig，则用deps参数来导入依赖
  // 如果LoggerService也需要一个工厂，则继续以这种方式定义直到全部加载完
  // appConfig则是定义一个变量，通过deps来加载进依赖中，变量可以是对象或者常量
  // 用{provide: 'APP_CONFIG', useValue: {isDEV: false}}来定义，useValue就可以定义是对象或者常量
  providers: [{
    provide: ProductService,
    useFactory: (logger: LoggerService, appConfig) => {
      if (appConfig.isDEV) {
        return new ProductService(logger);
      } else {
        return new OtherproductService(logger);
      }
  },
    // 导入上面工厂模式需要的依赖提供器
    deps: [LoggerService, 'APP_CONFIG']
  },
    // 这里在定义另一个需要的提供器APP_CONFIG
    {
      // useValue就可以定义是对象或者常量即可以像下面的那样写一个对象
      // 也可以直接写useValue：false
      provide: 'APP_CONFIG', useValue: {isDEV: false}
    }, LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
