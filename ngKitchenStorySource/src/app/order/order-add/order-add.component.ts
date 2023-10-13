import { OrderService } from './../order.service';
import { Component, OnInit } from '@angular/core';
import { Order } from '../order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.css']
})
export class OrderAddComponent implements OnInit {
  addorder : Order = new Order();
  constructor(private orderService : OrderService, private router : Router) { }
  ngOnInit(): void { }

  AddOrderInfo() {
    this.orderService.AddOrder(this.addorder).subscribe (data => {
      this.getAllOrdersInfo();
    });
  }

  getAllOrdersInfo() {
    this.router.navigate(['OrderListDetails']);
  }
}
