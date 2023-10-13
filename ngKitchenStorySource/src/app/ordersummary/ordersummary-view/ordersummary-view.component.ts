import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ordersummary } from '../ordersummary';
import { OrdersummaryService } from './../ordersummary.service';

@Component({
  selector: 'app-ordersummary-view',
  templateUrl: './ordersummary-view.component.html',
  styleUrls: ['./ordersummary-view.component.css']
})

export class OrdersummaryViewComponent implements OnInit {
  id:number;
  ordersummary:Ordersummary;
  ordersummarys:Ordersummary[];

  constructor(private ordersummaryService :OrdersummaryService, 
    private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.showOrdersummaryData();
  }

  showOrdersummaryData()
  {
    this.ordersummary = new Ordersummary();
      this.ordersummaryService.GetOrdersummaryById(this.id).subscribe(data=>{
          this.ordersummary = data;
      });
  }

  closeAndBackToOrdersummaryList() {
    this.router.navigate(['OrdersummaryListDetails']);
  }

  deleteOrdersummaryData(id:number)
  {
    let confirmDelete = confirm("Are you sure you want to delete");
    if(confirmDelete == true)
    {
      this.ordersummaryService.DeleteOrdersummary(id).subscribe(data=>{
        this.router.navigate(['OrdersummaryListDetails']);
      });
    }
  }

  updateOrdersummaryData(id:number)
  {
    this.router.navigate(['OrdersummaryUpdateDetails', id]);
  }  

  showAllOrdersummarysData()
  {
    this.ordersummaryService.GetAllOrdersummarys().subscribe(data =>{
      this.ordersummarys = data;
    });
  }
}
