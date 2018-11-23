import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

  //通过添加装饰器 @Input() 修饰rating来接收前台传过来的数据
  @Input()
  private rating: number = 0;
  private stars: boolean[];

  @Input()
  // 默认只读状态
  private readonly:boolean = true;

  // 必须是这个名字，输出属性名字是输入名字加上change，详情组件绑定才可以用[(rating)]
  // 也就是说Angular内置的规则：输出属性的名字必须是输入属性名字后面加上Change，后面双向绑定才能用[(rating)]
  // EventEmitter用来发射一个事件将
  @Output()
  private ratingChange: EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit() { }

  // 由于star是输入属性，当其发生变化时会触发ngOnChanges这个钩子，从而可以在这里面做修改
  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i=1; i<=5; i++) {
      this.stars.push(i > this.rating);
      if (i > this.rating && this.readonly) {
        break
      }
    }
  }


  // 根据新的值来更新star数组从而根据点击星星来改变星级评价的状态
  clickStar(index: number) { // index点击星星传进来的下标
    if(!this.readonly){ // 如果不是只读状态，就可以点
      this.rating = index + 1; //点第一个星星，index0,想要第一个星星显示，所以加1
      // 这个就不需要了，触发ngOnChanges是会自动触发ngOnInit，就不需要手动调用了
      // this.ngOnInit(); // 根据新的rating值将stars数组重新赋值，
      this.ratingChange.emit(this.rating) //将等级发出去，产品组件接收
    }

  }



}
