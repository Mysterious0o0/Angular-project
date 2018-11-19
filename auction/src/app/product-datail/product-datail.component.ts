import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, ProductService, Comment} from "../shared/product.service";

@Component({
  selector: 'app-product-datail',
  templateUrl: './product-datail.component.html',
  styleUrls: ['./product-datail.component.css']
})
export class ProductDatailComponent implements OnInit {

  // 声明变量类型
  product: Product;
  comments: Comment[];
  constructor(private routeInfo: ActivatedRoute,
              // 导入依赖服务
              private productServer: ProductService
  ) { }

  ngOnInit() {
    // 接收前端获取的商品id
    let peoductId = this.routeInfo.snapshot.params['productId'];
    // 返回展示商品
    this.product = this.productServer.getProduct(peoductId);
    // 返回展示商品评论的全部信息，逐条以列表形式
    this.comments = this.productServer.getCommentsForProductId(peoductId);
  }

}
