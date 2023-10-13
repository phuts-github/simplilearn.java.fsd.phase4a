import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseURL = "http://localhost:8080/api/v1/user";

  constructor(private httpClient:HttpClient) { }
  
  AddUser (user : User):Observable <User> {
    return this.httpClient.post<User>(`${this.baseURL}`, user);
  }

  DeleteUser (id:number):Observable <Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  GetAllUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}`);
  }
  
  GetUserById (id:number):Observable <User> {
    return this.httpClient.get<User>(`${this.baseURL}/${id}`);
  }

  UpdateUser (id: number, updateuser:User):Observable <Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, updateuser);
  }

}
