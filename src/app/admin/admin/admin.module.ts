import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminOrdersComponent } from '../components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from '../components/admin-products/admin-products.component';
import { ProductFormComponent } from '../components/product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule
  ]
})
export class AdminModule { }
