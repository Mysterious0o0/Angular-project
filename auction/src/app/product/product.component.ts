import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl = 'http://placehold.it/320x150';

  // 导入依赖注入
  constructor(private productService: ProductService) { }

  ngOnInit() {
    // 返回商品列表
    this.products = this.productService.getProducts()
  }

}
