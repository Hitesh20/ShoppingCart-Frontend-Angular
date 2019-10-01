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
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.productId = id;
    });

    this.productService.getOneProduct(this.productId).subscribe(data => this.product = data);
  }

  findProduct(id) {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.products.length; i++) {
      // tslint:disable-next-line:triple-equals
      if (id == this.products[i].id) {
        this.product = this.products[i];
      }
    }

  }
}
