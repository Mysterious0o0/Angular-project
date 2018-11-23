import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-price-quote',
  templateUrl: './price-quote.component.html',
  styleUrls: ['./price-quote.component.css']
})
export class PriceQuoteComponent implements OnInit {

  // 声明两个属性，用来和模板绑定
  stockCode: string = 'IBM';

  price: number;

  // 信息输出出去，谁感兴趣来订阅它，EventEmitter需要一个泛型。
  // lastPrice,可以发射事件，也可以订阅事件，发射事件，就必须用@output装饰器来装饰
  @Output()
    // <PriceQuote>就是一个泛型，泛型就是你要往外发的数据是什么类型的，
  lastPrice: EventEmitter<PriceQuote> = new EventEmitter();

  //
  @Output()
  //  定义一个buy作为发射报价的eventEmitter
  buy: EventEmitter<PriceQuote> = new EventEmitter();


  constructor() {
    // 写个定时器每秒变换一次价格
    setInterval(() => {
      // 生成一个变量，类型是priceQuote
      let priceQuote:PriceQuote = new PriceQuote(this.stockCode, 100*Math.random());
      this.price = priceQuote.lastPrice; // 价格等于最新生成的价格

      // emit一个值出去，发出去当前最新的报价，然后在父组件(app.component.ts)中接收
      this.lastPrice.emit(priceQuote)
    },1000);
  }

  // 点击按钮时，我们需要知道股票的报价，
  // 故需要把点击时的股票价格发出去，这样就需要一个eventEmitter来发射
  buyStock(event){
    // 这样就把购买时的股票价格发出去了
    // 然后在中间人模式中，他的父组件(app.ts)来接收
    this.buy.emit(new PriceQuote(this.stockCode, this.price))
  }


  ngOnInit() {
  }
}
// 首先定义报价对象，封装股票价格信息。
export class PriceQuote {
  constructor(public stockCode: string,
              public lastPrice: number
  ){
  }
}
