import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // 模拟商品数据
  private products: Product[] = [
    new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品，angular创建模拟数据",["电子商品", "硬件商品"]),
    new Product(2, "第二个商品", 4.99, 4.5, "这是第二个商品，angular创建模拟数据",["图书", "音频"]),
    new Product(3, "第三个商品", 2.99, 1.5, "这是第三个商品，angular创建模拟数据",["家具商品", "厨房商品"]),
    new Product(4, "第四个商品", 5.99, 2.5, "这是第四个商品，angular创建模拟数据",["电子商品", "配件商品"]),
    new Product(5, "第五个商品", 5.99, 3.5, "这是第五个商品，angular创建模拟数据",["厨房商品", "工具商品"]),
    new Product(6, "第六个商品", 6.99, 2.5, "这是第六个商品，angular创建模拟数据",["热销商品", "食物商品"]),
  ];
  // 模拟评论数据
  private comments:Comment[] = [
    new Comment(1,1, "2018-11-19 16:03:57", '张三', 3, "还不错"),
    new Comment(2,1, "2018-10-10 09:01:45", '李四', 3, "还不错"),
    new Comment(3,1, "2018-11-11 06:56:18", '王五', 3, "还不错"),
    new Comment(4,3, "2018-09-10 15:24:10", '周六', 3, "还不错"),
    new Comment(5,2, "2018-07-19 14:13:40", '张呆', 3, "还不错"),
    new Comment(6,5, "2018-09-17 13:14:52", '萌萌', 3, "还不错"),

  ];

  constructor() { }

  // 获取商品列表
  getProducts(): Product[] {
    return this.products;
  }

  // 获取商品id
  getProduct(id: number): Product{
    return this.products.find((product) => product.id == id);
  }

  // 用商品id过滤出对应的评论id
  getCommentsForProductId(id: number): Comment[] {
    // filter过滤条件
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }
}

// 定义商品信息
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

// 定义评论信息
export class Comment {
  constructor(public id: number,
              public productId: number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string
  ){

  }
}
