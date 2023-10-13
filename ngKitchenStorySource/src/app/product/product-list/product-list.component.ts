import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

  productinfo : Product[];

  constructor(private productService :ProductService, private router:Router) { }

  ngOnInit(): void { 
    this.showAllProductsData();
  }

  showAllProductsData()
  {
    this.productService.GetAllProducts().subscribe(data =>{
      this.productinfo = data;
    });
  }

  viewProductData(id:number)
  {
    this.router.navigate(['ProductViewDetails', id]);
  }

  deleteProductData(id:number)
  {
    let confirmDelete = confirm("Are you sure you want to delete");
    if(confirmDelete == true)
    {
      this.productService.DeleteProduct(id).subscribe(data=>{
        this.showAllProductsData();
      });
    }
  }

  updateProductData(id:number)
  {
    this.router.navigate(['ProductUpdateDetails', id]);
  }
}
