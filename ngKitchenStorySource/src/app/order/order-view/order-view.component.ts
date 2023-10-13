import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../order';
import { OrderService } from './../order.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})

export class OrderViewComponent implements OnInit {
  id:number;
  order:Order;
  orders:Order[];

  constructor(private orderService :OrderService, 
    private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.showOrderData();
  }

  showOrderData()
  {
    this.order = new Order();
      this.orderService.GetOrderById(this.id).subscribe(data=>{
          this.order = data;
      });
  }

  closeAndBackToOrderList() {
    this.router.navigate(['OrderListDetails']);
  }

  deleteOrderData(id:number)
  {
    let confirmDelete = confirm("Are you sure you want to delete");
    if(confirmDelete == true)
    {
      this.orderService.DeleteOrder(id).subscribe(data=>{
        this.router.navigate(['OrderListDetails']);
      });
    }
  }

  updateOrderData(id:number)
  {
    this.router.navigate(['OrderUpdateDetails', id]);
  }  

  showAllOrdersData()
  {
    this.orderService.GetAllOrders().subscribe(data =>{
      this.orders = data;
    });
  }
}
