import { Component, OnInit } from '@angular/core';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor(private cartService: CartService) { }

  private total = 0;
  private myProducts;
  ngOnInit() {
    this.cartService.showMyCart().subscribe((data) =>
      this.myProducts = data);
  }

  removeOneQuantity(id) {
     this.cartService.removeOne(id).subscribe(data1 => {
       this.cartService.showMyCart().subscribe(data => {
         this.myProducts = data;
       });
     });

  }
  addOneQuantity(id) {
     this.cartService.addToCart(id).subscribe(data1 => {
       this.cartService.showMyCart().subscribe(data => {
         this.myProducts = data;
       });
     });
  }

  removeProduct(id) {
    this.cartService.removeWholeProduct(id).subscribe(data1 => {
      this.cartService.showMyCart().subscribe(data => {
        this.myProducts = data;
      });
    });
  }
}
