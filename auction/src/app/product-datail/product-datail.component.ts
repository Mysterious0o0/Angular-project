import {Component, OnInit} from '@angular/core';
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

  // 评论区默认5颗星
  newRating: number = 5;
  // 新的评价内容
  newComment: string = "";

  isCommentHidden =true;//默认情况下，隐藏

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

  addComment(){
    let comment = new Comment(0, this.product.id, new Date().toDateString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);

    // 初始化评论区，但无法改变star数组的值，故需要去star操作
    this.newComment=null;
    this.newRating=5;
    this.isCommentHidden=true;

    // 新增评论后，更改商品的总星级
    //所有评论的和,reduce需要两个初始值，第一次调0，加第一个评论的星级，最后拿到所有的星级的和
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    // 得到一个平均值
    this.product.rating = sum/this.comments.length;
  }
}
