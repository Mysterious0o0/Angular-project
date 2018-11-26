import {FormControl, FormGroup} from "@angular/forms";
import {of} from "rxjs";

export function mobileValidator(control: FormControl): any {
  // 手机号正则表达式
  const mobieReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  // 校验输入的值
  const valid = mobieReg.test(control.value);
  console.log('mobile的校验结果是：' + valid);
  /*返回空代表通过，valid为false的时候，返回对象，key,随便给一个值*/
  return valid ? null : {mobile : true};
}

// 异步校验器
export function mobileAsyncValidator(control: FormControl): any {
  // 手机号正则表达式
  const mobieReg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  // 校验输入的值
  const valid = mobieReg.test(control.value);
  console.log('mobile的校验结果是：' + valid);
  /*返回时把返回值放在一个流里返回的*/
  return of(valid ? null : {mobile : true});
}

export function equalValidator(group: FormGroup): any {
  const password: FormControl = group.get('password') as FormControl;
  const confirmp: FormControl = group.get('confirmp') as FormControl;
  // 校验结果
  const valid: boolean = (confirmp.value === password.value);
  console.log('密码校验结果' + valid);
  return valid ? null : {equal: {err: "密码和确认密码不匹配"}};
}
