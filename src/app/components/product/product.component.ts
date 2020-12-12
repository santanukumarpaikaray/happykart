import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products:any;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products=this.productService.getproducts()

  }

}
