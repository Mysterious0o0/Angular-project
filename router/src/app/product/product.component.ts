import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private productId: number;
  private productName: string;

  constructor(private routeInfo: ActivatedRoute) { }

  ngOnInit() {
    // 从查询参数中获取传过来的参数（方法一）
    // this.productId = this.routeInfo.snapshot.queryParams["id"];
    // 从路由路径中获取传过来的参数(方法二)
    // this.productId = this.routeInfo.snapshot.params["id"];
    // 上述两个方式会导致两个物品之间相互查看时profuctId只会被创建一次，从而会使商品信息无法更新
    // 上面的snapshot是算参数快照，只能初始化一次，所以用下面方法，参数订阅
    // snapshot快照 subscribe订阅，后面用=>定义了一个隐函数
    this.routeInfo.params.subscribe((params: Params) => this.productId = params['id']);

    this.routeInfo.data.subscribe((data:{product: Product}) => {
      this.productId = data.product.id;
      this.productName = data.product.name
    })
  }

}

export class Product {

  constructor(public id: number, public name: string){

  }
}
