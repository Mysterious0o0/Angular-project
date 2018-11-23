import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

//  定义日志的编号
let logIndex: number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})


// 将所有的钩子都引入进来，然后一个个看
// 这个例子只是来测试钩子的调用顺序的后面会详细说各个钩子的用法
export class LifeComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit, OnDestroy{

  // 声明一个输入属性目的是为了演示构造函数和NgOnInit的区别
  @Input()
  name: string;

  logIt(msg: string) {
    // 打印当前编号和msg
    // #代表的是标记 ${}显示值 ++后自增
    // 前后的点不是引号而是~对应的那个点·
    console.log(`#${logIndex++} ${msg}`);
  }

  constructor() {
    this.logIt("name属性在constructor里的值是：" + name)
  }

  // ngOnChanges的changes是一个SimpleChanges对象
  // 这里面包含了所有输入属性变化前的值和变化后的值
  ngOnChanges(changes: SimpleChanges): void {
    //  需要从changes里面把name属性变化以后的值取出来
    let name = changes['name'].currentValue;
    this.logIt("name属性在constructor里的值是：" + name)
  }
  /* 除了上面那两个构造方式不同之外，剩下的构造方式都一样，只要把当前方法名打出来就可以了*/

  ngOnInit() {
    this.logIt("ngOnInit")
  }

  ngAfterContentChecked(): void {
    this.logIt("ngAfterContentChecked")
  }

  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit")

  }

  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked")

  }

  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit")
  }

  ngDoCheck(): void {
    this.logIt("ngDoCheck")
  }



  ngOnDestroy(): void {
  }

}
