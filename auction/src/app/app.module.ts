import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDatailComponent } from './product-datail/product-datail.component';
import { HomeComponent } from './home/home.component';
import {RouterModule, Routes} from "@angular/router";
import {ProductService} from "./shared/product.service";

// 声明路由配置
const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'product/:productId', component: ProductDatailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDatailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 注入路由配置，这是在主模块，在子模块的时候用forchild()声明注入
    RouterModule.forRoot(routeConfig)
  ],
  // 依赖注入声明
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
