import {AfterContentChecked, AfterContentInit, Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit,AfterContentInit,
  AfterContentChecked, OnDestroy{
  ngAfterContentChecked(): void {
    console.log("子组件投影内容变更检测完毕")
  }

  ngAfterContentInit(): void {
    console.log("子组件投影内容初始化完毕")
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    console.log("child4组件被销毁")
  }
}
