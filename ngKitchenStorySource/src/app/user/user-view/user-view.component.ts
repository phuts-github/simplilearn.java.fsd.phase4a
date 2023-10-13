import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})

export class UserViewComponent implements OnInit {
  id:number;
  user:User;
  users : User[];

  constructor(private userService :UserService, 
    private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.showUserData();
  }

  showUserData()
  {
    this.user = new User();
      this.userService.GetUserById(this.id).subscribe(data=>{
          this.user = data;
      });
  }

  closeAndBackToUserList() {
    this.router.navigate(['UserListDetails']);
  }

  deleteUserData(id:number)
  {
    let confirmDelete = confirm("Are you sure you want to delete");
    if(confirmDelete == true)
    {
      this.userService.DeleteUser(id).subscribe(data=>{
        this.router.navigate(['UserListDetails']);
      });
    }
  }

  updateUserData(id:number)
  {
    this.router.navigate(['UserUpdateDetails', id]);
  }  

  showAllUsersData()
  {
    this.userService.GetAllUsers().subscribe(data =>{
      this.users = data;
    });
  }
}
