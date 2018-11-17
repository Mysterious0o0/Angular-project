import {CanDeactivate} from "@angular/router";
import {ProductComponent} from "../product/product.component";

// 声明CanDeactivate时需要一个泛型，这个泛型就是你要离开时的界面的组件
export class unSavedGuard implements CanDeactivate<ProductComponent>{
  canDeactivate(component:ProductComponent){

    return window.confirm("你还没有保存，确定要离开么？")
  }

}
