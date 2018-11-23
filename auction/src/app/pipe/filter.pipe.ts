import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // 需要三个字段：商品列表,过滤的商品字段,输入的关键字
  transform(list: any[], filterField: string, keyword: string): any {
    // 判断传没传过滤的商品字段或者输入的关键字
    if(!filterField || !keyword) {
      return list;
    }
    return list.filter(
      item => {
        // 拿到商品的值fieldValue
        let fieldValue = item[filterField];
        // fieldValue.indexOf(keyword)中的indexOf是指fieldValue包含keyword这个字段的个数
        // 如果>0则返回true，则页面就进行过滤，
        return fieldValue.indexOf(keyword) >= 0;
      }
    )
    return null;
  }

}
