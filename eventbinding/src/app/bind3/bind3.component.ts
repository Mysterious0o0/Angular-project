import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs/operators";
// import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'app-bind3',
  templateUrl: './bind3.component.html',
  styleUrls: ['./bind3.component.css']
})
export class Bind3Component implements OnInit {


  //假设，输入框，输入，搜索股票感兴趣的信息，当输入ibm，然后有的话，返回信息，
  // 输入一个i，想服务器发送请求，最后调用了三次。
  // 一般我们用一个超时处理。隔500s处理。
  /* FormControl对象：这个对象是表单常用的类，用于代替表单的元素，每个表单都有
  他自己的FormControl对象，默认情况下，无论何时，表单发生改变的时候，FormControl都会
  发射一个valuechanges事件，valuechanges事件会组成一个可订阅的流*/
  // 声明一个searchInput属性，类型是FormControl，new一个FormControl类
  searchInput: FormControl = new FormControl();
  constructor() {
    // 这种方式是只要input组件值一改变，这边就有响应，性能有点浪费所以采用下面的方法
    // this.searchInput.valueChanges
    //   .subscribe( stockCode => this.getStockInfo(stockCode));
    // 这种方法是监测input组件，每500ms监测一遍，如果没改变在触发下面的响应
    this.searchInput.valueChanges
      .pipe(debounceTime(500))  // 500ms没有收到新的值得变化才发射出去，如果收值的变化就在流里保存着不到观察者调方法
      .subscribe( stockCode => this.getStockInfo(stockCode));
  }

  ngOnInit() {
  }
  getStockInfo(value: string){
    console.log(value)
  }
}
