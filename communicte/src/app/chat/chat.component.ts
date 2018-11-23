import {Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit ,OnChanges, DoCheck{

  @Input()
  greeting: string;

  @Input()
  user:{name: string};

  message: string = "初始化消息";

  constructor() { }

  ngOnInit() {
  }
  // JSON.stringify控制台打印以json格式输出
  ngOnChanges(changes: SimpleChanges): void {
    console.log(JSON.stringify(changes, null, 2));
  }

  oldUsername: string; // 用来保存user.name改变之前的值
  changeDetected: boolean; // 标记当前的username属性是否发生变化
  changeCount: number; // 标记变更监测机智被调用的次数
  //触发变更监测机制就调用这个钩子
  ngDoCheck(): void {
    if(this.oldUsername !== this.user.name) {
      this.changeDetected = true;
      console.log("DoCheck user.name从" + this.oldUsername + "变为" + this.user.name);
      this.oldUsername = this.user.name
    }
    //有变化
    if(this.changeDetected){
      this.changeCount = 0; // 计数器清空
    }else{
      this.changeCount++;
      console.log("DoCheck user.name 没有变化时ngDoCheck被调用了" + this.changeCount + "次");
    }
    this.changeDetected = false; // 无论变化没变化，最后都更改标志位
  }

}
