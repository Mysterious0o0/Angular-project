import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // 声明一个formModel
  formModel: FormGroup;
  // 声明一个接收商品类别的数组
  categories: string[];

  // 将ProductService注入
  constructor(private productService: ProductService) {
    // 简化代码
    let fb = new FormBuilder();
    // 定义表单
    this.formModel = fb.group({
      // 商品名，且名字长度不少于2个字
      title: ['', Validators.minLength(2)],
      // 价格为空，校验标准是必须为正数,自定义一个校验器
      price: ['', this.positiveNumberValidator],
      category: ['-1']
    })
  }

  ngOnInit() {
    // 接收商品类型
    this.categories = this.productService.getAllCategories()
  }

  // 定义一个检验方法
  positiveNumberValidator(control: FormControl): any {
    // 判断不是初始的null
    if(!control.value){
      return null
    }
    // 解析里面的值
    let price = parseInt(control.value);
    if(price > 0){
      return null
    }else {
      return {positiveNumber: true}
    }
  }

  onSearch(){
    // 如果通过校验，就在控制台打印信息
    if(this.formModel.valid){
      console.log(this.formModel.value)
    }
  }

}
