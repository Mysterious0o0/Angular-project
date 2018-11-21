import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {


  imgUrl: string = 'http://placehold.it/150x100';

  size: number = 2;

  divClass:string;

  isBig: boolean = false;

  isDev: boolean = false;

  divNgClass: any = {
    a: false,
    b: false,
    c: false,
  };

  divNgStyle: any = {
    color: 'red',
    background: 'yellow'
  };

  name: string;

  constructor() {

    setTimeout(() => {
      // 全改变
      // this.divClass = 'a b c;'
      // 单一样式改变
      // this.isBig = true;
      // css统一管理
      // this.divNgClass = {
      //   a: true,
      //   b: true,
      //   c: true
      // }
      // 改变样式
      // this.isDev = true;
      // 批量更改style
      // this.divNgStyle = {
      //   color: 'blue',
      //   background: 'red'
      // };
    }, 3000);
  // 每3秒更新name值为Tom
  setInterval(() =>{
    this.name = "Tom"
  }, 3000)

  }



  ngOnInit() {
  }

  doOnClick(event: any) {
    console.log(event);
  }

  doOnInput(event: any) {
    // 这是dom属性，是对应输入的值，可以改变
    console.log(event.target.value);
    // 这是html属性，指定初始值，不可改变
    console.log(event.target.getAttribute("value"));
    this.name = event.target.value;
  }
}
