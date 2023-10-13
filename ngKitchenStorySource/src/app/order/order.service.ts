import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  
  private baseURL = "http://localhost:8080/api/v1/order";

  constructor(private httpClient:HttpClient) { }
  
  AddOrder (order : Order):Observable <Object> {
    return this.httpClient.post(`${this.baseURL}`, order);
  }

  DeleteOrder (id:number):Observable <Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  GetAllOrders():Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.baseURL}`);
  }

  GetOrderByUserId(id:number):Observable<Order[]>{
    return this.httpClient.get<Order[]>(`${this.baseURL}/user/${id}`);
  }
  
  GetOrderById (id:number):Observable <Order> {
    return this.httpClient.get<Order>(`${this.baseURL}/${id}`);
  }

  UpdateOrder (id: number, updateorder:Order):Observable <Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, updateorder);
  }

}
