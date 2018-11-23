import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {PriceQuote} from "./price-quote/price-quote.component";
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked{
//
//   // stock = ''; // 输入的股票代码默认是一个空的就可以
//
//   // 发射的事件是这个类型的，就声明这个类型属性，接收发射的报价信息
//   // priceQuote: PriceQuote = new PriceQuote("", 0);
//
//   // 方法里接收一个event:PriceQuote，事件的类型就是子组件发射emit的类型，
//   // 父组件通过这个类型就能拿到它。子组件发射的报价就被父组件拿到了。
//   // priceQuoteHandler(event: PriceQuote) {
//     // this.priceQuote =event;把本地的变量赋值为捕获的事件
//     // this.priceQuote = event;
//   // }
//
//   // 父组件拿到报价组件的购买事件后传给了本地变量
//   // buyHandle(event: PriceQuote) {
//     // this.priceQuote =event;把本地的变量赋值为捕获的事件
//     // this.priceQuote = event;
//   // }
//
//   // title = 'Tom';
//   // greeting:string = "Hello";
//   // user:{name:string} = {name: 'Tom'};
//
//   constructor() {
//     /*// greeting 改变是指向的内存地址，
//     // 但字符串创建了就不会改变了即使实例对象改变了也会存在内存中
//     var greeting = "Hello";
//     greeting = "Hello World";
//
//     // user变量本身仍然保持在被创建时的内存地址，
//     // 改的是name的属性的内存地址指向
//     var user = {name: "Tom"};
//     user.name = "Jerry"*/
//   }
//
//   /*------------------------------------------*/
//   // 通过装饰器可以在父组件里引用一个子组件，
//   // 从而在父组件的方法里调用子组件的方法
//   @ViewChild('child1')
//   //  通过child1找到相拥的组件，并赋值给child1
//   child1: ChildComponent;
//
//   // 定义一个message在父模板里调用，
//   // 测试父模板组装完成后改变视图绑定的东西会有什么影响
//   massage: string;
//
//   ngOnInit(): void {
//     // 调用子组件的方法
//     setTimeout(() =>{
//       this.child1.greeting("Tom");
//     }, 5000);
//   }
//
//   ngAfterViewChecked(): void {
//     console.log("父组件的视图变更检测完毕")
//   }
//
//   ngAfterViewInit(): void {
//     console.log("父组件的视图初始化完毕");
//     // this.massage = "hello"; // 会报异常
//     // 如果要传值，需要用setTimeout方法
//     setTimeout(() => {
//       this.massage = 'Hello';
//     },300)
//   }
//
//   title:string = "tom";
//   divContent = '<div> 父组件的东西</div>';
//
// }


export class AppComponent implements AfterContentInit,
AfterContentChecked, AfterViewInit{

  message:string = 'hello';
  ngAfterContentChecked(): void {
    console.log("父组件投影内容变更检测完毕")
  }

  // ngAfterContentInit与AfterViewInit不同在于，
  // 前者可以在视图初始化之前改变某一属性且不会报错，后者初始化改变属性会报错
  // 前者只是投影初始化完毕
  ngAfterContentInit(): void {
    console.log("父组件投影内容初始化完毕");
    this.message = 'hello world';
  }

  ngAfterViewInit(): void {
    console.log("父组件视图初始化完毕")
  }

}
