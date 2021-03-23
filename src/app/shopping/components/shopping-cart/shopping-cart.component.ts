 import { ShoppingCartItem } from '../../../shared/models/shoppingCartItem';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

 @Component({
   selector: 'app-shopping-cart',
   templateUrl: './shopping-cart.component.html',
   styleUrls: ['./shopping-cart.component.css']
 })
 export class ShoppingCartComponent implements OnInit {
   cart$: Observable<ShoppingCart>;
   items: ShoppingCartItem[] = [];
    
  constructor(private shoppingCartService: ShoppingCartService
              ) { }

   async ngOnInit() {
    this.cart$ = await this.shoppingCartService.getCart();
   }

  
  clearCart() {
    this.shoppingCartService.clearCart();
  }

 }
