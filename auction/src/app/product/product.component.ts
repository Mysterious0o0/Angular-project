import {Component, OnInit} from '@angular/core';
import {Product, ProductService} from "../shared/product.service";
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Product[];
  private imgUrl = 'http://placehold.it/320x150';
  // 保留的关键字
  private keyword: string;
  // 定义搜索框文字的响应式流变量
  private titleFilter: FormControl = new FormControl();

  // 导入依赖注入
  constructor(private productService: ProductService) {
    this.titleFilter.valueChanges
      // 当用户停止输入500ms时，触发后面的内容
      .pipe(debounceTime(500))
      .subscribe(
        value => this.keyword = value
      );
  }

  ngOnInit() {
    // 返回商品列表
    this.products = this.productService.getProducts()
  }

}
