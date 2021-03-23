import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckOutComponent } from '../components/check-out/check-out.component';
import { MyOrdersComponent } from '../components/my-orders/my-orders.component';
import { OrderSuccessComponent } from '../components/order-success/order-success.component';
import { ProductFilterComponent } from '../components/products/product-filter/product-filter.component';
import { ProductsComponent } from '../components/products/products.component';
import { ShippingFormComponent } from '../components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from '../components/shopping-cart-summary/shopping-cart-summary.component';
import { ShoppingCartComponent } from '../components/shopping-cart/shopping-cart.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminModule } from 'src/app/admin/admin/admin.module';



@NgModule({
  declarations: [
    ProductsComponent,
    CheckOutComponent,
    ShoppingCartComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShippingFormComponent
  ],
  imports: [
    SharedModule,
    AdminModule,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class ShoppingModule { }
