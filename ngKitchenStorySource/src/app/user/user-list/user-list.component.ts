import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

  userinfo : User[];

  constructor(private userService :UserService, private router:Router) { }

  ngOnInit(): void { 
    this.showAllUsersData();
  }

  showAllUsersData()
  {
    this.userService.GetAllUsers().subscribe(data =>{
      this.userinfo = data;
    });
  }

  viewUserData(id:number)
  {
    this.router.navigate(['UserViewDetails', id]);
  }

  deleteUserData(id:number)
  {
    let confirmDelete = confirm("Are you sure you want to delete");
    if(confirmDelete == true)
    {
      this.userService.DeleteUser(id).subscribe(data=>{
        this.showAllUsersData();
      });
    }
  }

  updateUserData(id:number)
  {
    this.router.navigate(['UserUpdateDetails', id]);
  }
}
