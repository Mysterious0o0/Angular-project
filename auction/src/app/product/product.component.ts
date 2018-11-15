import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products: Array<Product>;
  private imgUrl = 'http://placehold.it/320x150';

  constructor() { }

  ngOnInit() {
    this.products = [
      new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品，angular创建模拟数据",["电子商品", "硬件商品"]),
      new Product(1, "第二个商品", 4.99, 4.5, "这是第二个商品，angular创建模拟数据",["图书", "音频"]),
      new Product(1, "第三个商品", 2.99, 1.5, "这是第三个商品，angular创建模拟数据",["家具商品", "厨房商品"]),
      new Product(1, "第四个商品", 5.99, 2.5, "这是第四个商品，angular创建模拟数据",["电子商品", "配件商品"]),
      new Product(1, "第五个商品", 5.99, 3.5, "这是第五个商品，angular创建模拟数据",["厨房商品", "工具商品"]),
      new Product(1, "第六个商品", 6.99, 2.5, "这是第六个商品，angular创建模拟数据",["热销商品", "食物商品"]),
    ]
  }

}

export class Product {

  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }
}
