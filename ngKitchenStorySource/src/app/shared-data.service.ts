import { Injectable } from '@angular/core';
import { Userlogin } from './login/userlogin';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  // protected store: Map<string, any> = new Map();

  // public get(key: string): any {
  //   return this.store.get(key);
  // }

  // public set(key: string, value: any) {
  //   this.store.set(key, value);
  // }



  private sharedCurrentUser ={
    createdate: '',
    email: '',
    fname: '',
    id: 0,
    lname: '',
    modifydate: '',
    pass: '',
    phone: ''
  };
  
  // public getSharedCurrentUser(data: Userlogin) :Userlogin {
  public getSharedCurrentUser() :Userlogin {    
    return this.sharedCurrentUser;
  }

  public setSharedCurrentUser(data: Userlogin) {
    this.sharedCurrentUser = (data);
  }


}
