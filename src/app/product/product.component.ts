import { Component, OnInit } from '@angular/core';
import {Product} from "./product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public model: Product;
  constructor() {
      this.model = new Product();
      this.model.name = "your string value here";
  }

  ngOnInit() {
  }

}
