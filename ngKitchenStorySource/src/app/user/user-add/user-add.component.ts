import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {
  adduser : User = new User();
  constructor(
    private userService : UserService, 
    private sharedDataService:SharedDataService,
    private router : Router) { }
  ngOnInit(): void { }

  AddUserInfo() {
    if(
      this.adduser.email == null || 
      this.adduser.fname == null ||
      this.adduser.lname == null ||
      this.adduser.pass == null ||
      this.adduser.email.trim() == "" || 
      this.adduser.fname.trim() == "" ||
      this.adduser.lname.trim() == "" ||
      this.adduser.pass.trim() == ""
      ) {
        alert ("All form fields are required!")
      } else if (
        this.adduser.fname.trim().toUpperCase() == "ADMIN" ||
        this.adduser.lname.trim().toUpperCase() == "ADMIN"
      ) {
        alert ("First or Last names can not be 'admin or ADMN!'")
      } else {
        this.userService.AddUser(this.adduser).subscribe (data => {
          if (data == null) {
            alert ("Error - Email id already exists");
          } else {
            if(this.sharedDataService.getSharedCurrentUser().id > 0) {
              if(this.sharedDataService.getSharedCurrentUser().fname == "admin") {
                this.getAllUsersInfo();
              }
            } else {
              this.getLoginScreen();
            }
          }
        });
      }
  }

  getAllUsersInfo() {
    this.router.navigate(['UserListDetails']);
  }

  getLoginScreen() {
    this.router.navigate(['Userlogin']);
  }
}
