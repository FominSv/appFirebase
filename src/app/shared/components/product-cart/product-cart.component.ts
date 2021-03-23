import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { ShoppingCart } from '../../models/shopping-cart';


@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
  filteredProducts: Product [] =[];
  products: any[] = [];
  items: ShoppingCart[] = [];
  

@Input('product') product: Product;
@Input('show-actions') showActions = true;
@Input('shopping-cart') shoppingCart: ShoppingCart; 
 
    constructor(private cartServise: ShoppingCartService ) {
     
     }

  addToCart() {
      this.cartServise.addToCart(this.product);
        }

   
 async ngOnInit() {
    
  }

}
