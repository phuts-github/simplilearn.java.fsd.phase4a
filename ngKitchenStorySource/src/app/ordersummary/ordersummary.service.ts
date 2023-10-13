import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Ordersummary } from './ordersummary';

@Injectable({
  providedIn: 'root'
})
export class OrdersummaryService {
  
  private baseURL = "http://localhost:8080/api/v1/ordersummary";

  constructor(private httpClient:HttpClient) { }
  
  AddOrdersummary (ordersummary : Ordersummary):Observable <Object> {
    return this.httpClient.post(`${this.baseURL}`, ordersummary);
  }

  DeleteOrdersummary (id:number):Observable <Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  GetAllOrdersummarys():Observable<Ordersummary[]>{
    return this.httpClient.get<Ordersummary[]>(`${this.baseURL}`);
  }
  
  GetOrderSummaryByUserId(id:number):Observable<Ordersummary[]>{
    return this.httpClient.get<Ordersummary[]>(`${this.baseURL}/user/${id}`);
  }

  GetOrdersummaryById (id:number):Observable <Ordersummary> {
    return this.httpClient.get<Ordersummary>(`${this.baseURL}/${id}`);
  }

  UpdateOrdersummary (id: number, updateordersummary:Ordersummary):Observable <Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, updateordersummary);
  }

}
