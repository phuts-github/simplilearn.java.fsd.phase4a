import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  addproduct : Product = new Product();
  constructor(private productService : ProductService, private router : Router) { }
  ngOnInit(): void { }

  AddProductInfo() {
    this.productService.AddProduct(this.addproduct).subscribe (data => {
      this.getAllProductsInfo();
    });
  }

  getAllProductsInfo() {
    this.router.navigate(['ProductListDetails']);
  }
}
