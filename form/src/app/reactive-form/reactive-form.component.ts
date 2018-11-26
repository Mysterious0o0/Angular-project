import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  /* 接收一个参数，这个参数指定FormControl的初始值，如果它与页面的input连接时，
  这个input的初始值即为这个参数值。而ngModel指定就会为附着的元素input创建一个FormContrl*/
  username: FormControl = new FormControl("AAA");

  // 创建日历
  formModel: FormGroup = new FormGroup({
    // 定义一个单独的FormControl
    username2: new FormControl("BBB"),
    // 用FormGroupName来连接FormGroup,FormGroupName就是dateRange
    dateRange: new FormGroup({
      // FormControlName就是from和to，前端调用就用这两个
      from: new FormControl(), // 日期范围
      to: new FormControl()
    }),
    emails: new FormArray([
      new FormControl('aa@df.com'),
      new FormControl('BB@DD.COM')
    ])
  });

  // 创建邮箱
  /*与FormGroup的formContrl不同的是，没有key,只能靠序号来访问,第一个序号就是0*/
  // emails: FormArray = new FormArray([
  //   new FormControl('aa@df.com'),
  //   new FormControl('BB@DD.COM')
  // ]);


  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formModel.value)
  }

  addEmail(){
    /*添加一个邮箱输入框，需要拿到FormAarry as FormArray是转换为FormArray类型*/
    const emails = this.formModel.get('emails') as FormArray;
    /*模板根据数组循环，数组多一个元素，多一个输入框*/
    emails.push(new FormControl())
  }
}
