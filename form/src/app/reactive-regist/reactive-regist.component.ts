import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {equalValidator, mobileAsyncValidator, mobileValidator} from "../Validator/Validators";

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  formModel:FormGroup;
  // constructor() {
  //   this.formModel = new FormGroup({
  //     username: new FormControl(),
  //     mobile: new FormControl(),
  //     passwordGroup: new FormGroup({
  //       password: new FormControl(),
  //       confirmp: new FormControl()
  //     })
  //   })
  // }

  /*校验器就是一个方法，名字可以自定义，但是需要一个参数且参数必须和验证的那个Control类型相同，
  必须有一个返回值，返回值可以是任意结构的对象，但是这个对象有一个要求，
  就是他的key必须要的string类型的，value可以是任意类型*/
  //下面就是这个校验器方法的格式
  xxx(control: AbstractControl): {[key: string]: any} {
    return null;
  }
  // 自定义校验器，手机号校验
  // mobileValidator(control: FormControl): any {
  //   // 手机号正则表达式
  //   const mobieReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  //   // 校验输入的值
  //   const valid = mobieReg.test(control.value);
  //   console.log('mobile的校验结果是：' + valid);
  //   /*返回空代表通过，valid为false的时候，返回对象，key,随便给一个值*/
  //   return valid ? null : {mobile : true};
  // }
  //
  // equalValidator(group: FormGroup): any {
  //   const password: FormControl = group.get('password') as FormControl;
  //   const confirmp: FormControl = group.get('confirmpass') as FormControl;
  //   // 校验结果
  //   const valid: boolean = (confirmp.value === password.value);
  //   console.log('密码校验结果' + valid);
  //   return valid ? null : {equal: true};
  // }


  // 用FormBuilder来定义上面的forModel来简化代码
  // FormBuilder需要用依赖注入的方式定义
  constructor(fb: FormBuilder) {
    this.formModel = fb.group({
          username: ['', [Validators.required, Validators.minLength(6)]],/*必填，最短6维*/
          // mobile: ['', this.mobileValidator], // 将校验器放入手机号字段
          // mobile: ['', mobileValidator], // 全局引入，这样所有的组件都可以引用这些校验器
          mobile: ['', mobileValidator, mobileAsyncValidator], // 引入异步校验器

          passwordGroup: fb.group({
            password: ['', Validators.minLength(6)],
            confirmp: ['']
            // 校验的是group，需要声明到一个对象里key必须为validator
          // }, {validators: this.equalValidator})
          }, {validator: equalValidator}) // 全局引入
        })
  }


  onSubmit() {
    // 校验结果
    // let isValid: boolean = this.formModel.get('username').valid;
    // console.log('username的校验结果是：' + isValid);
    // // 校验错误信息
    // let errors: any = this.formModel.get('username').errors;
    // console.log('username的错误信息是' + JSON.stringify(errors));
    // console.log(this.formModel.value)

    // 只有这里买你的表单全都是合法的时候 this.forModel.valid才是true
    if (this.formModel.valid){
      console.log(this.formModel.value)
    }
  }

  ngOnInit() {
  }

}
