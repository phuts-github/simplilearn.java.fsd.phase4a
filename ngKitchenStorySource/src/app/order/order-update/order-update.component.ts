import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from './../order.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})

export class OrderUpdateComponent implements OnInit {
  id:number;
  updateorder : Order = new Order();

  constructor(private orderService : OrderService, 
    private route:ActivatedRoute, private router:Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOrderData();
  }

  getOrderData()
  {
    this.updateorder = new Order();
      this.orderService.GetOrderById(this.id).subscribe(data=>{
          this.updateorder = data;
      });
  }

  cancelAndBackToOrderList() {
    this.router.navigate(['OrderListDetails']);
  }

  updateOrderData() {
    this.orderService.UpdateOrder(this.id, this.updateorder).subscribe (data => {
      this.showAllOrdersData();
    });
  }

  showAllOrdersData() {
    this.router.navigate(['OrderListDetails']);
  }
}
