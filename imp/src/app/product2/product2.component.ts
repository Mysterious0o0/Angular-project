import {Component, Injector, OnInit} from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {OtherproductService} from '../shared/otherproductservice.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  // 更改商品的提供器
  providers: [{
    provide: ProductService, useClass: OtherproductService
  }]

})
// 这个和product1代码一样，只是提供器不同
export class Product2Component implements OnInit {

  product: Product;

  /* private productService: ProductService，冒号前面的productService是个变量名，
  冒号后面的是那个ProductService对应的是 providers中的provide的值,
  而最终把productService这个变量通过provide的token(即ProductService)
  所对应的提供器OtherproductService定义为productService的类型*/
  constructor(private productService: ProductService) { }
  // 这种方式不推荐使用，只是作为一种解释的代码来看注入器是怎么引入的，不方便测试调用之类的问题
  // private productService: ProductService;
  // constructor(private injector: Injector) {
  //   this.productService = injector.get(ProductService);
  // }
  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
