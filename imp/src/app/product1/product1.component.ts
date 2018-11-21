import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  // 声明一个属性变量
  product: Product;

  // 将提供器引入，必须在constructor里引入
  // 格式：constructor(private 变量名: 引入的提供器名) { }
  constructor(private productService: ProductService) { }

  ngOnInit() {
    // 获取返回的product信息，从而传入html中
    this.product = this.productService.getProduct();
  }

}
