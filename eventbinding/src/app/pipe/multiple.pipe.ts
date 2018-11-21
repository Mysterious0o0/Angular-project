import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  // 管道名字，在html调用的时候也要写这个名字，名字可以自己定义
  name: 'multiple'
})
export class MultiplePipe implements PipeTransform {

  // value接受的一个输入值原始值， args：可选参数
  transform(value: any, args?: any): any {
    if(!args){
      args = 0;
    }
    return value * args;
  }

}
