import { OrdersummaryService } from './../ordersummary.service';
import { Component, Input, OnInit } from '@angular/core';
import { Ordersummary } from '../ordersummary';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordersummary-add',
  templateUrl: './ordersummary-add.component.html',
  styleUrls: ['./ordersummary-add.component.css']
})
export class OrdersummaryAddComponent implements OnInit {
  @Input()
  addordersummary : Ordersummary = new Ordersummary();
  constructor(private ordersummaryService : OrdersummaryService, private router : Router) { }
  ngOnInit(): void { }

  AddOrdersummaryInfo() {
    this.ordersummaryService.AddOrdersummary(this.addordersummary).subscribe (data => {
      this.getAllOrdersummarysInfo();
    });
  }

  getAllOrdersummarysInfo() {
    this.router.navigate(['OrdersummaryListDetails']);
  }
}
