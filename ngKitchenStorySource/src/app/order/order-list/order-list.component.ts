import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from './../order.service';
import { SharedDataService } from 'src/app/shared-data.service';
import { Userlogin } from 'src/app/login/userlogin';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {
  
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
  
  orderinfo : Order[];

  constructor(
    private orderService :OrderService, 
    private sharedDataService:SharedDataService,
    private router:Router) { }

  ngOnInit(): void { 
    if (this.sharedDataService.getSharedCurrentUser().id > 0) {
      this.userlogin = this.sharedDataService.getSharedCurrentUser();
    }
    this.decideOrderListToShow();
  }

  decideOrderListToShow() {
    if (this.userlogin.id > 0 ) {
      if (this.userlogin.fname.toLowerCase() == "admin") {
        this.showAllOrdersData();
      } else {
        this.showUserOrdersData();
      }
    }
  }

  showAllOrdersData()
  {
    this.orderService.GetAllOrders().subscribe(data =>{
      this.orderinfo = data;
    });
  }

  showUserOrdersData()
  {
    this.orderService.GetOrderByUserId(this.userlogin.id).subscribe(data =>{
      this.orderinfo = data;
    });
  }

  viewOrderData(id:number)
  {
    this.router.navigate(['OrderViewDetails', id]);
  }

  deleteOrderData(id:number)
  {
    let confirmDelete = confirm("Are you sure you want to delete");
    if(confirmDelete == true)
    {
      this.orderService.DeleteOrder(id).subscribe(data=>{
        this.decideOrderListToShow();
      });
    }
  }

  updateOrderData(id:number)
  {
    this.router.navigate(['OrderUpdateDetails', id]);
  }
}
