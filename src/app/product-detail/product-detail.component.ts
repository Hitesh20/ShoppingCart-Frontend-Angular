import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductsService} from '../products.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private productId;
  private products = [];
  private product;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductsService,
              private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      // tslint:disable-next-line:radix
      const id = parseInt(params.get('id'));
      this.productId = id;
    });

    this.productService.getOneProduct(this.productId).subscribe(data => this.product = data);
  }

  addThisProductToCart(id) {
    this.cartService.addToCart(id).subscribe((data) =>
     console.log(data));
    alert('Product added to cart.');
  }
}
