import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-datail',
  templateUrl: './product-datail.component.html',
  styleUrls: ['./product-datail.component.css']
})
export class ProductDatailComponent implements OnInit {

  productTitle: string;
  constructor(private routeTnfo: ActivatedRoute) { }

  ngOnInit() {
    this.productTitle = this.routeTnfo.snapshot.params['prodTitle'];
  }

}
