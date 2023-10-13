import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Basket, Shopmenu, OrderPayment } from '../shopmenu';
import { ShopmenuService } from './../shopmenu.service';
import { Userlogin } from 'src/app/login/userlogin';
import { SharedDataService } from 'src/app/shared-data.service';

@Component({
  selector: 'app-shopmenu-list',
  templateUrl: './shopmenu-list.component.html',
  styleUrls: ['./shopmenu-list.component.css']
})

export class ShopmenuListComponent implements OnInit {

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

  basketMessage:String = "Empty";

  searchMenuName:string;
  searchMenuType:string;
  shopmenuinfo : Shopmenu[];
  shopmenu = Shopmenu;
  
  basket : Basket;
  basketList : Basket[] = [];
  basketTotal : number;
  
  id: number;
  name: string;
  price: number;

  orderPayment : OrderPayment = new OrderPayment();
    
  constructor(
    private shopmenuService :ShopmenuService, 
    private route:ActivatedRoute, 
    private sharedDataService:SharedDataService,
    private router:Router
    ) { }

  ngOnInit(): void { 
    if (this.sharedDataService.getSharedCurrentUser().id > 0) {
      this.userlogin = this.sharedDataService.getSharedCurrentUser();
    }
    
    // this.isUserLoggedIn();
    this.initializeOrderPayment();
    this.showAllShopmenusData();
    this.id = this.route.snapshot.params['id'];
    this.name = this.route.snapshot.params['name'];
    this.price = this.route.snapshot.params['price'];
  }

  buyMenuItemData(id:number)
  {
    this.isUserLoggedIn();
    
    this.shopmenuinfo.forEach(element => {
      if (id == element.id) {
        this.basket = new Basket();
        this.basket.id=id;
        this.basket.name=element.name;
        this.basket.userid=this.userlogin.id;
        this.basket.price=element.price;
        this.basketList.push(this.basket);
        this.getBasketTotal();
        return;
      }
    });
  }

  isUserLoggedIn() {
    if (this.userlogin.id == 0) {
      this.showLoginScreen();
    }
  }

  showLoginScreen() {
    this.router.navigate(['Userlogin']);
  }

  removeBasketItem(i: number) 
  {
    this.basketList.splice(i,1);
    this.getBasketTotal();
  }  

  getBasketTotal() {
    this.basketTotal = 0;
    this.basketList.forEach(element => {
      // force two decimal number after comma
      this.basketTotal = parseFloat((Math.round((this.basketTotal + element.price)*100)/100).toFixed(2));
      this.orderPayment.payamount = parseFloat(this.basketTotal.toFixed(2));
    });
  }

  makePayment()
  {
    if (this.orderPayment.payname == null || this.orderPayment.payname.trim() == "" 
      // || this.orderPayment.payname.length < 3
      ) {
      alert ("Invalid Cardholder name");
    } else if (this.orderPayment.paycardno == 0 
      // || this.orderPayment.cardno.toString.length != 16
      ) {
      alert ("Invalid Card number");
    } else if (this.orderPayment.payexpdate == 0 
      // || this.orderPayment.payexpdate.toString.length != 4
      ) {
      alert ("Invalid Expiry date");
    } else if (this.orderPayment.paythreedigits == 0 
      // || this.orderPayment.paythreedigits.toFixed.length != 3
      ) {
      alert ("Invalid Three digits");
    } else {
      this.shopmenuService.PayForBasketItems(this.basketList).subscribe(data=>{
        if (data != null) {
          this.basket = data;
          this.basketMessage = "Order number " + this.basket.id + " placed successfully. You may order again..";
        } else {
          this.basketMessage = "Empty";
        }
      });
      this.basketList = [];
      this.initializeOrderPayment();
    }

  }

  initializeOrderPayment() {
    this.orderPayment.payamount=0;
    this.orderPayment.paycardno=0;
    this.orderPayment.payexpdate=0;
    this.orderPayment.payname="";
    this.orderPayment.paythreedigits=0;
  }

  showAllShopmenusData()
  {
    this.shopmenuService.GetAllShopmenus().subscribe(data =>{
      this.shopmenuinfo = data;
    });
  }

  resetFilter()
  {
    this.showAllShopmenusData();
  }

  showFilteredShopmenusData(searchMenuName:string,searchMenuType:string)
  {
    if (searchMenuName == null || searchMenuType == null) {
      alert ("Search text and search type required");
    } else {
      this.shopmenuService.GetFilteredShopmenus(searchMenuName,searchMenuType).subscribe(data =>{
        this.shopmenuinfo = data;
      });      
    }
  }

}
