import { Product } from './../models/product';
import { AngularFireDatabase  } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { ShoppingCartItem } from '../models/shoppingCartItem';
import {take, map} from 'rxjs/operators';
import { ShoppingCart } from '../models/shopping-cart';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

 
  constructor(private db: AngularFireDatabase) { }
    
  async getCart(): Promise<Observable<ShoppingCart>> {
        const cartId = await this.getOrCreateCartId();
      //  return this.db.object('/shopping-carts/'  + cartId)
      // .valueChanges()
      //   .pipe((map((x)=> (x) ? new ShoppingCart(( x as any).items): (x as any))));
           
        return this.db.object('/shopping-carts/' + cartId)
        // .valueChanges()
        // .pipe(map((items: ShoppingCart) => new ShoppingCart(items.itemsMap)));
        .snapshotChanges()
        .pipe(map((items) => new ShoppingCart(items.payload.child('/items').val())));
      }
          
   // (items: {[productId: string]: ShoppingCartItem}) => new ShoppingCart(items)
            
    //  .valueChanges()
      //   .pipe(map((items: {[productId: string]: ShoppingCartItem}) => new ShoppingCart(items)));        
      //   (map((x)=> (x) ? new ShoppingCart(( x as any).items): (x as any))))
      //   ;
         
       
async addToCart(product: Product) { 
    this.updateItem(product, 1);
  }

 async removeFromCart(product: Product) {
    this.updateItem(product, -1);
  }

  async clearCart() { 
    let cartId = await this.getOrCreateCartId();
    this.db.object('/shopping-carts/' + cartId + '/items').remove();
  }
  

  private create() { 
    return this.db.list('/shopping-carts').push({
      dateCreated: new Date().getTime()
    });
  }

  private getItem(cartId: string, productId: string) {
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId);
  }


  private async getOrCreateCartId() {
    const cartId = localStorage.getItem('cartId');

    if (cartId)
      return cartId;

    const result = await this.create();
    localStorage.setItem('cartId', result.key);
    return result.key;
     }

  private async updateItem(product: Product, change: number) {
      const cartId = await this.getOrCreateCartId();
      const item = this.getItem(cartId, product.key);
  
      item
        .valueChanges()
        .pipe(take(1))
        .subscribe((data: ShoppingCartItem) => {
          const quantity = (data ? (data.quantity || 0) : 0) + change; // Used || to avoid null reference error
  
          if (!quantity)
            item.remove();
  
          else
            item.update({
              title: product.title,
              imageUrl: product.imageUrl,
              price: product.price,
              quantity
            });
        });
    }

  }



