import { Injectable } from '@angular/core';
import {Product} from "./product/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProductList(): Product[] {
      return [
          {
              name: 'Name',
              description: 'Description'
          }
      ];
  }
}
