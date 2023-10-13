import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private baseURL = "http://localhost:8080/api/v1/product";

  constructor(private httpClient:HttpClient) { }
  
  AddProduct (product : Product):Observable <Object> {
    return this.httpClient.post(`${this.baseURL}`, product);
  }

  DeleteProduct (id:number):Observable <Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  GetAllProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.baseURL}`);
  }
  
  GetProductById (id:number):Observable <Product> {
    return this.httpClient.get<Product>(`${this.baseURL}/${id}`);
  }

  UpdateProduct (id: number, updateproduct:Product):Observable <Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, updateproduct);
  }

}
