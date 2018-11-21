import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // 将LoggerService提供器注入到这个提供器中
  constructor(public logger: LoggerService) { }

  // 编写获取产品信息的函数，从而使product组件调用这个函数获取产品信息
  getProduct(): Product {
    // 直接调用LoggerService提供器的方法
    this.logger.log('getProduct方法调用');
    return new Product(0, 'iPhoneX', 9999, '电子产品');
  }
}

// 定义Product类来作为数据的来源
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {
  }
}

