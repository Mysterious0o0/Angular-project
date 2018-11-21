import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {range} from "rxjs";
import {map, filter} from "rxjs/operators";


@Component({
  selector: 'app-bind1',
  templateUrl: './bind1.component.html',
  styleUrls: ['./bind1.component.css']
})
export class Bind1Component implements OnInit {


  constructor() {  // fromEvent就是一个事件
    // Observable.from([1,2,3,4])  // 创建一个课件听的流 由于rxjs6.0原因Observable.from这个创建方式不存在了，之后再回头看看怎么改
    //   .filter( e => e % 2 == 0) // 筛选出偶数
    //   .map(e => e*e)  // 获取它的平方
    //   .subscribe( // 监听流的行为，观察者模式 拿出偶数之后平方，打印内容
    //     e => console.log(e),
    //     err => console.log(err),
    //     () => console.log("结束了")
    //   );
    range(0,4).pipe(
      filter( e => e % 2 == 0), // 筛选出偶数
      map(e => e*e)  // 获取它的平方
    )  // 创建一个课件听的流 找到关于rxjs6的创建方法了
      .subscribe( // 监听流的行为，观察者模式 拿出偶数之后平方，打印内容
        e => console.log(e),
        err => console.log(err),
        () => console.log("结束了")
      );
  }
  // Observable.from方法是从数组中创建一个可监听的流，即被观察者，可做操作
  // subscribe 将停留的行为，订阅
  // e => console.log(e), 处理流中得元素
  // err => console.log(err), 返回异常
  // () => console.log("结束了") 提示结束了
  // 接收并处理被订阅流的对象，叫做观察者


  ngOnInit() {
  }
  onKey(value:string){
    console.log(value)
  }
}
