import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Basket, Shopmenu } from './shopmenu';

@Injectable({
  providedIn: 'root'
})
export class ShopmenuService {
  
  private baseURL = "http://localhost:8080/api/v1/shopmenu";

  constructor(private httpClient:HttpClient) { }
  
  GetAllShopmenus():Observable<Shopmenu[]>{
    return this.httpClient.get<Shopmenu[]>(`${this.baseURL}`);
  }

  GetFilteredShopmenus(p1:string,p2:string):Observable<Shopmenu[]>{
    return this.httpClient.get<Shopmenu[]>(`${this.baseURL}/${p1}/${p2}`);
  }  
  
  BuyItemById (id:number):Observable <Shopmenu> {
    return this.httpClient.get<Shopmenu>(`${this.baseURL}/${id}`);
  }

  PayForBasketItems (basketList : Basket[]):Observable <Basket> {
    return this.httpClient.post<Basket>(`${this.baseURL}`, basketList);
 }
}
