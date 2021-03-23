import { ProductService } from '../../../shared/services/product.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  
  dtOptions: DataTables.Settings = {};
  products: any[];
  filteredProducts: any[];
  subscription: Subscription;
 

  constructor(private productService: ProductService  ) {
  this.subscription = this.productService.getAll()
   .subscribe(products => this.filteredProducts = this.products = products);
   }

  
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
    ngOnInit(): void {
       this.dtOptions = {
         pagingType: 'full_numbers',
         pageLength: 10,
         processing: true
         };
     }
  }

