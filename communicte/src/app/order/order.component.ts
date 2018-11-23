import {Component, Input, OnInit} from '@angular/core';
import {PriceQuote} from "../price-quote/price-quote.component";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  /*// 定义输入属性，等着父组件给她传值
  @Input()
  stockCode: string;
  // 定义输入属性，等着父组件给她传值
  @Input()
  amount: number;*/

  //这边接收中间人传过来的股票信息
  @Input()
  priceQuote: PriceQuote;

  constructor() {
    /*setInterval(() =>
    {
      // 隔三秒改变stockCode的值，
      // 界面会发现父组件没有改变而子组件的stock变为apple
      // 说明属性绑定是单向的，只能父组件影响子组件，
      // 子组件改变不影响父组件的值
      this.stockCode = 'apple';
    }, 3000)*/
  }

  ngOnInit() {
  }

}
