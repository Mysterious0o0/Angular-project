import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductComponent} from "./product/product.component";
import {Code404Component} from "./code404/code404.component";
import {SellerInfoComponent} from "./seller-info/seller-info.component";
import {ProductDescComponent} from "./product-desc/product-desc.component";
import {ChatComponent} from "./chat/chat.component";
import {loginGuard} from "./guard/login.guard";
import {unSavedGuard} from "./guard/unsaved.guard";
import {productResolve} from "./guard/product.resolve";


// 路由的配置，Rouyes是个数组，数组内中每个成员都有两个元素组成：路由的path和对应的组件
// 路由配置是优先匹配原则，所以通配符匹配的404界面要放在最后否则404后面的界面就不会被匹配了
const routes: Routes = [
  // redirectTo 重定向路由，重定向到home的路由上
  // pathMatch: 'full'代表加载home组件的所有信息
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  // {path: 'product', component: ProductComponent},
  // 通过路由来携带参数，路由分为两段，一段是路由，一段是携带的变量
  // {path: 'product/:id', component: ProductComponent},
  // 通过children来规定他的子路由，其内部和路由格式一样 路径+组件
  // {path: 'product/:id', component: ProductComponent, children:[
  //     {path: '', component: ProductDescComponent},
  //     {path: 'seller/:id', component: SellerInfoComponent}
  //   ]},
  // 添加登录守护，用户登录后才能访问product,用canActivate属性是进入路由的守护
  // canActivate是数组，如果要访问，需要依次通过数组内各个组件的所有要求
  // 定义canActivate后需要实例化loginGuard，则需要在@NGModule内实例化即添加providers: [loginGuard]
  // canDeactivate这个属性是离开界面时的守护，离开某一界面时会产生阻止，原理与canActivate相似
  // 定义canDeactivate后也需要实例化unSavedGuard，在@NGModule内实例化即添加providers:[loginGuard, unSavedGuard]
  // {path: 'product/:id', component: ProductComponent, children:[
  //     {path: '', component: ProductDescComponent},
  //     {path: 'seller/:id', component: SellerInfoComponent}
  //   ], canActivate: [loginGuard], canDeactivate: [unSavedGuard]},
  // resolve是一个对象，参数的名字（product）就是你想传进去的参数的名字，后期在product.component.ts调用的
  // 后面跟着的是你定义的resolve的组件，然后在providers声明就好了
  {path: 'product/:id', component: ProductComponent, children:[
      {path: '', component: ProductDescComponent},
      {path: 'seller/:id', component: SellerInfoComponent}
    ], resolve: {
    product: productResolve
    }
  },
  // 通过outlet: 'aux'定义这个组件只显示在名字为aux的插座上
  {path: 'chat', component: ChatComponent, outlet: 'aux'},
  {path: '**', component: Code404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [loginGuard, unSavedGuard, productResolve]
})
export class AppRoutingModule { }
