import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private productId;
  private products = [];
  private product;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => this.products = data);
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.productId = id;
      this.findProduct(this.productId);
    });
  }

  findProduct(id) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      // tslint:disable-next-line:no-unused-expression triple-equals
      if (id == this.products[i].id) {
        this.product = this.products[i];
      }
    }

  }
}
