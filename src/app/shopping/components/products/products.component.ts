import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ProductService } from '../../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../shared/models/product';
import {switchMap} from 'rxjs/operators';
import {  Observable } from 'rxjs';
import { ShoppingCart } from '../../../shared/models/shopping-cart';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  products: Product [] = [];
  filteredProducts: Product [] = [];
  category: string;
  product: any[] = [];
  cart$: Observable<ShoppingCart>;
 

  constructor(private productService: ProductService,
              private cartService: ShoppingCartService,
             private route: ActivatedRoute) {}
       

  async ngOnInit() {
   this.productService.getAll();
    this.cart$ = await this.cartService.getCart();
   this.populateProducts();
     }

  private populateProducts() {
      this.productService.getAll()
      .pipe(
        switchMap(products => {
          this.products = products;
          return this.route.queryParamMap;
        })
      )
      .subscribe(params => {
        this.category = params.get('category');
        this.applyFilter();
      });
    }

    private applyFilter() {
      this.filteredProducts = (this.category) ?
        this.products.filter(p => p.category === this.category) :
        this.products;
    }
    }

