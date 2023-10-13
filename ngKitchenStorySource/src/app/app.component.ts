import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Userlogin } from './login/userlogin';
import { SharedDataService } from './shared-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngKitchenStory';
  userlogin:Userlogin = {
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
    return this.userlogin;
  }  

  menuReload() :void 
  {
    this.checkCurrentUser();
    this.changeDetectorRef.detectChanges();
    //this.cdr.reattach();
  }

  checkCurrentUser() 
  {
    if (this.sharedDataService.getSharedCurrentUser().id > 0) {
      this.userlogin = this.sharedDataService.getSharedCurrentUser();
    }  
  }
}
