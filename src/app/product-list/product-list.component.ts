import { Component, OnInit } from '@angular/core';
import { MAIN_ROUTES } from '../app.route';
import {ProductsService} from '../products.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute) { }

  public products;
  private category;

  private allProducts;
  public prod;

  /*ngOnChanges() {
    this.productService.getAllProducts().subscribe(data => this.products = data);
  }*/

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const cat = params.get('category');
      this.category = cat;
      if (this.category === 'all') {
        this.productService.getAllProducts(this.category).subscribe(data => this.products = data);
      } else {
        this.productService.getProductsOfCategory(this.category).subscribe(data => this.products = data);
      }
    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  /*ngDoCheck() {
    this.productService.getAllProducts().subscribe(data => this.products = data);

    this.route.paramMap.subscribe((params: ParamMap) => {
      const cat = params.get('category');
      this.category = cat;
      this.productService.getProductsOfCategory(this.category).subscribe(data => this.products = data);
    });

  }*/

  seeDetails(product) {
    this.router.navigate(['product-detail', product.productId]);

  }
}
