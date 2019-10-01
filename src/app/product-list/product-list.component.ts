import { Component, OnInit } from '@angular/core';
import { MAIN_ROUTES } from '../app.route';
import {ProductsService} from '../products.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router, private route: ActivatedRoute) { }

  public products;

  public prod;
  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => this.products = data);

  }

  seeDetails(product) {
    this.router.navigate(['product-detail', product.productId]);

  }
}
