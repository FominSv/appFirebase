import { Observable } from 'rxjs';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { AppUser } from '../../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

    constructor(private auth: AuthService,
                private shoppingCartService: ShoppingCartService  )
                 {
    }
 
    
async ngOnInit() {
  this.auth.appUser$.subscribe(appUser => this.appUser = appUser);
   this.cart$ = await this.shoppingCartService.getCart();
    
}

logout() {
  this.auth.logout();
}
}
