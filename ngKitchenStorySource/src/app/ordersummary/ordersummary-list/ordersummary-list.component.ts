import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordersummary } from '../ordersummary';
import { OrdersummaryService } from './../ordersummary.service';
import { Userlogin } from 'src/app/login/userlogin';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-ordersummary-list',
  templateUrl: './ordersummary-list.component.html',
  styleUrls: ['./ordersummary-list.component.css']
})

export class OrdersummaryListComponent implements OnInit {

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
  
  ordersummaryinfo : Ordersummary[];

  constructor(
    private ordersummaryService :OrdersummaryService, 
    private sharedDataService:SharedDataService,
    private router:Router) { }

  ngOnInit(): void { 
    if (this.sharedDataService.getSharedCurrentUser().id > 0) {
      this.userlogin = this.sharedDataService.getSharedCurrentUser();
    }
    this.decideOrderSummaryListToShow();
  }

  decideOrderSummaryListToShow() {
    if (this.userlogin.id > 0 ) {
      if (this.userlogin.fname.toLowerCase() == "admin") {
        this.showAllOrdersummarysData();
      } else {
        this.showUserOrderSummaryData();
      }
    }
  }

  showAllOrdersummarysData()
  {
    this.ordersummaryService.GetAllOrdersummarys().subscribe(data =>{
      this.ordersummaryinfo = data;
    });
  }

  showUserOrderSummaryData()
  {
    this.ordersummaryService.GetOrderSummaryByUserId(this.userlogin.id).subscribe(data =>{
      this.ordersummaryinfo = data;
    });
  }

  viewOrdersummaryData(id:number)
  {
    this.router.navigate(['OrdersummaryViewDetails', id]);
  }

  deleteOrdersummaryData(id:number)
  {
    let confirmDelete = confirm("Are you sure you want to delete");
    if(confirmDelete == true)
    {
      this.ordersummaryService.DeleteOrdersummary(id).subscribe(data=>{
        this.decideOrderSummaryListToShow();
      });
    }
  }

  updateOrdersummaryData(id:number)
  {
    this.router.navigate(['OrdersummaryUpdateDetails', id]);
  }
}
