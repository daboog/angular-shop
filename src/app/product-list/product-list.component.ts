import { Component, OnInit } from '@angular/core';
import { ProductService} from "../product.service";
import {Product} from "../product/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[];

  constructor(
      private productService: ProductService
  ) {
  }

  getProducts(): void {
      this.products = this.productService.getProductList();
  }

  onBuy(event, product) {
    console.log('Buy product' + product.name);
  }

  ngOnInit() {
      this.getProducts();
  }

}
