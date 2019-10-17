import { Component, OnInit } from '@angular/core';
import { MAIN_ROUTES } from '../app.route';
import {ProductsService} from '../products.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CartService} from '../cart.service';
import {AuthenticationService} from '../authentication.service';
import {HttpHeaders} from '@angular/common/http';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router,
              private route: ActivatedRoute, private cartService: CartService,
              private loginService: AuthenticationService, private registrationService: RegistrationService) { }

  private products;
  private category;
  private role;
  private user;
  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const cat = params.get('category');
      this.category = cat;
      if (this.category === 'all') {
        this.productService.getAllProducts().subscribe(data => this.products = data);
      } else {
        this.productService.getProductsOfCategory(this.category).subscribe(data => this.products = data);
      }
    });
    this.registrationService.getUser().subscribe( data => {
      this.user = data;
      this.role = this.user.role;
    });
  }
  seeDetails(product) {
    this.router.navigate(['product-detail', product.productId]);
  }
  goTo(category) {
    this.router.navigate(['products', category]);
  }
  filterByPrice(price1, price2) {
    if (this.category === 'all') {
      this.productService.getAllProductsOfPrice(price1, price2).subscribe(data => this.products = data);
    } else {
      this.productService.getProductsOfCategoryAndPrice(this.category, price1, price2).subscribe(data => this.products = data);
    }
  }

  addToCart(id) {
    if (this.loginService.isUserLoggedIn()) {
    this.cartService.addToCart(id).subscribe((data) =>
      console.log(data));
    alert('Product added to cart.');
  } else {
      alert('Please Login First');
    }
  }

  removeProduct(product) {
    this.productService.removeFromDB(product.productId).subscribe((data) => {
      this.products = data;
      alert('Product Deleted Successfully');
    });
  }

  editProduct(product) {
    this.router.navigate(['editProduct', product.productId]);
  }
}
