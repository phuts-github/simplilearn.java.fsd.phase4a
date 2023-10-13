import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from './../product.service';
import { HttpBackend, HttpResponse, HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})

export class ProductViewComponent implements OnInit {
  id:number;
  product:Product;
  products:Product[];

  constructor(private productService :ProductService, 
    private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.showProductData();
  }

  showProductData()
  {
    this.product = new Product();
      this.productService.GetProductById(this.id).subscribe(data=>{
          this.product = data;
          console.log('data.status - ' +  data.status );
          if (data.status == null) {
            console.log('data.status');
            this.router.navigate(['ProductListDetails']);
          }
          if (this.product == null) {
            console.log('product is null');
            this.router.navigate(['ProductListDetails']);
          }
      });
  }

  closeAndBackToProductList() {
    this.router.navigate(['ProductListDetails']);
  }

  deleteProductData(id:number)
  {
    let confirmDelete = confirm("Are you sure you want to delete");
    if(confirmDelete == true)
    {
      this.productService.DeleteProduct(id).subscribe(data=>{
        this.router.navigate(['ProductListDetails']);
      });
    }
  }

  updateProductData(id:number)
  {
    this.router.navigate(['ProductUpdateDetails', id]);
  }  

  // showAllProductsData()
  // {
  //   this.productService.GetAllProducts().subscribe(data =>{
  //     this.products = data;
  //   });
  // }
}
