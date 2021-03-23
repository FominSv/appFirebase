import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AdminModule } from 'src/app/admin/admin/admin.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingModule } from 'src/app/shopping/shopping/shopping.module';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    LoginComponent
    
  ],
  exports: [
    NavbarComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminModule,
    SharedModule,
    ShoppingModule
    
  ]
})
export class CoreModule { }
