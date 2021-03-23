import { AuthService } from './shared/services/auth.service';
import { AdminProductsComponent } from './admin/components/admin-products/admin-products.component';
import { LoginComponent } from './core/components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckOutComponent } from './shopping/components/check-out/check-out.component';
import { HomeComponent } from './core/components/home/home.component';
import { OrderSuccessComponent } from './shopping/components/order-success/order-success.component';
import { ProductsComponent } from './shopping/components/products/products.component';
import { ShoppingCartComponent } from './shopping/components/shopping-cart/shopping-cart.component';
import { AdminOrdersComponent } from './admin/components/admin-orders/admin-orders.component';
import { MyOrdersComponent } from './shopping/components/my-orders/my-orders.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { AdminGuardService } from './admin/services/admin-guard.service';
import { ProductFormComponent } from './admin/components/product-form/product-form.component';
import { ShoppingCartSummaryComponent } from './shopping/components/shopping-cart-summary/shopping-cart-summary.component';


const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'shopping-cart', component: ShoppingCartComponent},
  {path: 'login', component: LoginComponent},
  {path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService]},
  {path: 'order-success/:id', component: OrderSuccessComponent, canActivate: [AuthGuardService]},
  {path: 'my/orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
  
  
  {path: 'admin/products/new', component: ProductFormComponent, canActivate: [AuthGuardService, AuthService]},
  {path: 'admin/products/:id', component: ProductFormComponent, canActivate: [AuthGuardService, AuthService]},
  {path: 'admin/products', component: AdminProductsComponent, canActivate: [AuthGuardService, AuthService]},
  {path: 'admin/orders', component: AdminOrdersComponent, canActivate: [AuthGuardService, AuthService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
