import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Userlogin } from 'src/app/login/userlogin';
import { SharedDataService } from 'src/app/shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

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
    private sharedDataService:SharedDataService,
    private changeDetectorRef: ChangeDetectorRef,
    private router : Router
    ) { }

  ngOnInit(): void 
  {
    this.checkCurrentUser();
  }

  getUserInfo(): Userlogin
  {
    return this.sharedDataService.getSharedCurrentUser();
    //return this.userlogin;
  }

  menuReload() :void 
  {
    this.checkCurrentUser();
    // this.changeDetectorRef.detectChanges();
    this.changeDetectorRef.reattach();
  }

  checkCurrentUser() 
  {
    if (this.sharedDataService.getSharedCurrentUser().id > 0) {
      this.userlogin = this.sharedDataService.getSharedCurrentUser();
    }  
  }
}
