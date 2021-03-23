import { Component, OnInit ,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Order } from '../../../shared/models/order';
import { Shipping } from '../../../shared/models/shipping';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit {

  @Input('cart') cart: ShoppingCart;

  shipping = new Shipping(); // New empty object of the Shipping class
  userId: string;
  userSubscription: Subscription;

  constructor(
    private orderService: OrderService,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
    this.userSubscription = this.auth.user$.subscribe(user => this.userId = user.uid);
  }

  async placeOrder() {
    const order = new Order(this.userId, this.shipping, this.cart);
    const result = await this.orderService.placeOrder(order);

    this.router.navigate(['/order-success', result.key]);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }
}


