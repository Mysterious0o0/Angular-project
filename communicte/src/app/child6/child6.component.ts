import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.css']
})
export class Child6Component implements OnInit, OnDestroy {


  ngOnDestroy(): void {
    console.log("child6组件被销毁")
  }

  constructor() { }

  ngOnInit() {
  }


}
