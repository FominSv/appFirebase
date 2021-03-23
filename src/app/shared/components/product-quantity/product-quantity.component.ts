import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ShoppingCartService } from '../../services/shopping-cart.service';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent implements OnInit {

  @Input('product') product: Product;
  @Input('shopping-cart') shoppingCart; 
   
      constructor(private cartServise: ShoppingCartService ) { }
  
    addToCart() {
        this.cartServise.addToCart(this.product);
          }
  
    removeFromCart() {
  this.cartServise.removeFromCart(this.product);
          }
   
    ngOnInit(): void {
    }

}
