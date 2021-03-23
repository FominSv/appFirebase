import { ProductService } from '../../../shared/services/product.service';
import { Component,  OnInit } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import {take} from 'rxjs/operators';

// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product: any = {};
  id;
    
  constructor(private categoryService: CategoryService,
              private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute)
              //  private formBuilder: FormBuilder)
              {
    this.categories$ = categoryService.getAll();

    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.productService.get(this.id)
      .subscribe(p => this.product = p)
   
     }
  }
  
  save(product) {
      if (this.id)  this.productService.update(this.id, product);
      else this.productService.create(product); 

      this.router.navigate(['/admin/products']);
}

  delete() {
    if (!confirm('Are you sure?'))
     return; 
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
   
  }


  ngOnInit(): void {

}

}
