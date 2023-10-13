import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})

export class ProductUpdateComponent implements OnInit {
  id:number;
  updateproduct : Product = new Product();

  constructor(private productService : ProductService, 
    private route:ActivatedRoute, private router:Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getProductData();
  }

  getProductData()
  {
    this.updateproduct = new Product();
      this.productService.GetProductById(this.id).subscribe(data=>{
          this.updateproduct = data;
      });
  }

  cancelAndBackToProductList() {
    this.router.navigate(['ProductListDetails']);
  }

  updateProductData() {
    this.productService.UpdateProduct(this.id, this.updateproduct).subscribe (data => {
      this.showAllProductsData();
    });
  }

  showAllProductsData() {
    this.router.navigate(['ProductListDetails']);
  }
}
