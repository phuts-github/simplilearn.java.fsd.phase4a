import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordersummary } from '../ordersummary';
import { OrdersummaryService } from './../ordersummary.service';

@Component({
  selector: 'app-ordersummary-update',
  templateUrl: './ordersummary-update.component.html',
  styleUrls: ['./ordersummary-update.component.css']
})

export class OrdersummaryUpdateComponent implements OnInit {
  id:number;
  updateordersummary : Ordersummary = new Ordersummary();

  constructor(private ordersummaryService : OrdersummaryService, 
    private route:ActivatedRoute, private router:Router) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOrdersummaryData();
  }

  getOrdersummaryData()
  {
    this.updateordersummary = new Ordersummary();
      this.ordersummaryService.GetOrdersummaryById(this.id).subscribe(data=>{
          this.updateordersummary = data;
      });
  }

  cancelAndBackToOrdersummaryList() {
    this.router.navigate(['OrdersummaryListDetails']);
  }

  updateOrdersummaryData() {
    this.ordersummaryService.UpdateOrdersummary(this.id, this.updateordersummary).subscribe (data => {
      this.showAllOrdersummarysData();
    });
  }

  showAllOrdersummarysData() {
    this.router.navigate(['OrdersummaryListDetails']);
  }
}
