import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { UserViewComponent } from './user/user-view/user-view.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductViewComponent } from './product/product-view/product-view.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { OrderViewComponent } from './order/order-view/order-view.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderAddComponent } from './order/order-add/order-add.component';
import { OrderUpdateComponent } from './order/order-update/order-update.component';
import { OrdersummaryAddComponent } from './ordersummary/ordersummary-add/ordersummary-add.component';
import { OrdersummaryListComponent } from './ordersummary/ordersummary-list/ordersummary-list.component';
import { OrdersummaryUpdateComponent } from './ordersummary/ordersummary-update/ordersummary-update.component';
import { OrdersummaryViewComponent } from './ordersummary/ordersummary-view/ordersummary-view.component';
import { ShopmenuListComponent } from './shopmenu/shopmenu-list/shopmenu-list.component';
import { UserloginComponent } from './login/userlogin/userlogin.component';

const routes: Routes = [

  {path:'ProductListDetails', component:ProductListComponent},
  {path:'ProductViewDetails/:id', component:ProductViewComponent},
  {path:'ProductAddDetails', component:ProductAddComponent},
  {path:'ProductUpdateDetails/:id', component:ProductUpdateComponent},
  {path:'UserListDetails', component:UserListComponent},
  {path:'UserViewDetails/:id', component:UserViewComponent},
  {path:'UserAddDetails', component:UserAddComponent},
  {path:'UserUpdateDetails/:id', component:UserUpdateComponent},
  {path:'OrderListDetails', component:OrderListComponent},
  {path:'OrderViewDetails/:id', component:OrderViewComponent},
  {path:'OrderAddDetails', component:OrderAddComponent},
  {path:'OrderUpdateDetails/:id', component:OrderUpdateComponent},
  {path:'OrdersummaryListDetails', component:OrdersummaryListComponent},
  {path:'OrdersummaryViewDetails/:id', component:OrdersummaryViewComponent},
  {path:'OrdersummaryAddDetails', component:OrdersummaryAddComponent},
  {path:'OrdersummaryUpdateDetails/:id', component:OrdersummaryUpdateComponent},
  {path:'ShopmenuListDetails', component:ShopmenuListComponent},
  {path:'Userlogin', component:UserloginComponent},
  {path:'', redirectTo:'Users', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
