import { Injectable } from '@angular/core';
import {Product, ProductService} from './product.service';
import {LoggerService} from './logger.service';

@Injectable({
  providedIn: 'root'
})

// 实现implements，这样就能实现ProductService内的相同方法
export class OtherproductService implements ProductService {

  getProduct(): Product {
    return new Product(1, 'sumsung8', 8888, '电子产品');
  }

  constructor(public logger: LoggerService) { }
}
