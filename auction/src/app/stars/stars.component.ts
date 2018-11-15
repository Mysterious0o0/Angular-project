import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

  //通过添加装饰器 @Input() 修饰rating来接收前台传过来的数据
  @Input()
  private rating: number = 0;
  private stars: boolean[];

  constructor() { }

  ngOnInit() {
    this.stars = []
    for (let i=1; i<=5; i++) {

      this.stars.push(i > this.rating)
      if (i > this.rating) {
        break
      }
    }
  }

}
