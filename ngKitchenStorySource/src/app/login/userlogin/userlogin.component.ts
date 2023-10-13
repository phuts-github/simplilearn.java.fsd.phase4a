import { AdminHeaderComponent } from './../../headerFooter/admin-header/admin-header.component';
import { AppComponent } from './../../app.component';
import { Userlogin } from './../userlogin';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginService } from '../userlogin.service';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
 
  currentUser : Userlogin ={
    createdate: '',
    email: '',
    fname: '',
    id: 0,
    lname: '',
    modifydate: '',
    pass: '',
    phone: ''
  };
  userlogin : Userlogin = {
    id: 0,
    fname: '',
    lname: '',
    email: '',
    pass: '',
    phone: '',
    createdate: '',
    modifydate: ''
  };
  
  constructor(
    private userloginService : UserloginService, 
    private sharedDataService:SharedDataService,
    private adminHeaderComponent:AdminHeaderComponent,
    private appComponent:AppComponent,
    private router : Router) { }

  ngOnInit(): void {
    if (this.sharedDataService.getSharedCurrentUser().id > 0) {
      this.currentUser = this.sharedDataService.getSharedCurrentUser();
    }
  }

  Login (userlogin:Userlogin) {
    if (userlogin.email == null || userlogin.email == "") {
      alert("User id / Email is required");
    } else if (userlogin.pass == null || userlogin.pass == "") {
      alert("Password is required");
    } else {
      this.UserAuthenticate(userlogin)
    }
  }

  UserAuthenticate(userlogin: Userlogin) {
    this.userloginService.ValidateUser(userlogin).subscribe (data => {
      this.userlogin = data;
      if (this.userlogin == null || this.userlogin.id == 0 ) {
        alert("Invalid user or password!");
      } else {
        this.sharedDataService.setSharedCurrentUser(this.userlogin);
        this.adminHeaderComponent.menuReload();
        this.appComponent.menuReload();
        this.showShopMenu();
      }
    });
  }

  showShopMenu() {
    this.router.navigate(['ShopmenuListDetails']);
  }

}
