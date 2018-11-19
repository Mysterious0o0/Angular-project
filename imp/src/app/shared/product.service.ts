import { Injectable } from '@angular/core';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public logger: LoggerService) { }
  getProduct(): Product {
    this.logger.log('getProduct方法调用');
    return new Product(0, 'iPhoneX', 9999, '电子产品');
  }
}


export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {
  }
}

