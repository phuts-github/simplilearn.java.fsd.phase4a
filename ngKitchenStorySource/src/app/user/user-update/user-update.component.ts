import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})

export class UserUpdateComponent implements OnInit {
  id:number;
  updateuser : User = new User();

  constructor(private userService : UserService, 
    private route:ActivatedRoute, private router:Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getUserData();
  }

  getUserData()
  {
    if(
      this.updateuser.email == null || 
      this.updateuser.fname == null ||
      this.updateuser.lname == null ||
      this.updateuser.pass  == null ||
      this.updateuser.email.trim() == "" || 
      this.updateuser.fname.trim() == "" ||
      this.updateuser.lname.trim() == "" ||
      this.updateuser.pass.trim()  == ""
      ) {
        alert ("All form fields are required!")
      } else if (
        this.updateuser.fname.trim().toUpperCase() == "ADMIN" ||
        this.updateuser.lname.trim().toUpperCase() == "ADMIN" 
      ) {
        alert ("First or Last names can not be 'admin or ADMN!'")
      } else {
        this.updateuser = new User();
          this.userService.GetUserById(this.id).subscribe(data=>{
              this.updateuser = data;
        });
    }
  }

  cancelAndBackToUserList() {
    this.router.navigate(['UserListDetails']);
  }

  updateUserData() {
    this.userService.UpdateUser(this.id, this.updateuser).subscribe (data => {
      this.showAllUsersData();
    });
  }

  showAllUsersData() {
    this.router.navigate(['UserListDetails']);
  }
}
