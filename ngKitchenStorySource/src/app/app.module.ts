import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminHeaderComponent } from './headerFooter/admin-header/admin-header.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderUpdateComponent } from './order/order-update/order-update.component';
import { OrderViewComponent } from './order/order-view/order-view.component';
import { OrdersummaryAddComponent } from './ordersummary/ordersummary-add/ordersummary-add.component';
import { OrdersummaryListComponent } from './ordersummary/ordersummary-list/ordersummary-list.component';
import { OrdersummaryUpdateComponent } from './ordersummary/ordersummary-update/ordersummary-update.component';
import { OrdersummaryViewComponent } from './ordersummary/ordersummary-view/ordersummary-view.component';
import { ShopmenuListComponent } from './shopmenu/shopmenu-list/shopmenu-list.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHeaderComponent,
    UserAddComponent,
    UserListComponent,
    UserUpdateComponent,
    UserViewComponent,
    ProductAddComponent,
    ProductListComponent,
    ProductUpdateComponent,
    ProductViewComponent,
    OrderAddComponent,
    OrderListComponent,
    OrderUpdateComponent,
    OrderViewComponent,
    OrdersummaryAddComponent,
    OrdersummaryListComponent,
    OrdersummaryUpdateComponent,
    OrdersummaryViewComponent,
    ShopmenuListComponent,
    UserloginComponent
  ],
  imports: [
    BrowserModule
    ,AppRoutingModule 
    ,HttpClientModule
    ,FormsModule
    ,NgbModule
    // ,NgbModule.forRoot()
  ],
  providers: [UserloginComponent,AdminHeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
