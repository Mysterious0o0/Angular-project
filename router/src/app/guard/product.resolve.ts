import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Product} from "../product/product.component";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable()
// 实现一个接口是Resolve，而他的类型是Product，即Product是你需要返回的数据的类
// 当然Product类需要在product.component.ts里面定义一个Product类，才能在这里引用
export class productResolve implements Resolve<Product>{

  constructor(private router: Router){

  }
  // ActivatedRouteSnapshot：就是一个大的router的类类似于之前的this.routeInfo.params
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {

    let productId:number = route.params["id"];
    if(productId == 1){
      return new Product(1, "iPhone7");

    }
    else {
      this.router.navigate(['/home']);
      return undefined;

    }
  }

}
