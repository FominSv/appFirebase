import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';



@NgModule({
  declarations: [
    ProductCartComponent,
    ProductQuantityComponent,
  ],
  imports: [
    CommonModule, 
    FormsModule,
    DataTablesModule
  ],
  exports: [
    ProductCartComponent,
    ProductQuantityComponent,
    FormsModule,
    DataTablesModule
  ],
  providers: [
    AuthGuardService,
    AuthService,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})
export class SharedModule { }
