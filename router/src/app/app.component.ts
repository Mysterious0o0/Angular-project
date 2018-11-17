import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'router';

  constructor(private router: Router) {

  }

  toProductDetails(){
    //this.router.navigate后面和html中的routerLink后跟的参数形式是一样的，都是数组类型
    this.router.navigate(['/product', 2])
  }
}
