import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Userlogin } from './userlogin';

@Injectable({
  providedIn: 'root'
})

export class UserloginService {
  currentUser:Userlogin;
  
  private baseURL = "http://localhost:8080/api/v1/userlogin";

  constructor(private httpClient:HttpClient) { }
  
  ValidateUser (userlogin : Userlogin):Observable <Userlogin> {
    return this.httpClient.post<Userlogin>(`${this.baseURL}`, userlogin);
  }

}
