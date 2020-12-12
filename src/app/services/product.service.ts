import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products:any;
  constructor() { }
  getproducts(){
    return[
      new Product(1,'Laptop',50000),
      new Product(2,'Mobile',25000),
      new Product(3,'refrigerator',20000)

    ]
  }
}
