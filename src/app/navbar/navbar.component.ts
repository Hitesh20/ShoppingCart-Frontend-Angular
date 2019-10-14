import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RegistrationComponent} from '../registration/registration.component';
import {RegistrationService} from '../registration.service';
import {AuthenticationService} from '../authentication.service';
import {ProductsService} from '../products.service';
import {ProductClass} from '../ProductClass';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private role;
  private user;
  private searchedItem: string;
  private products;
  @Output() public childEvent = new EventEmitter();
  constructor(private registrationService: RegistrationService, private loginService: AuthenticationService,
              private productService: ProductsService) { }

  ngOnInit() {
    this.registrationService.getUser().subscribe( data => {
      this.user = data;
      this.role = this.user.role;
    });
  }

  /*searchOnClick() {
    console.log(this.searchedItem);
    // tslint:disable-next-line:triple-equals
    if (this.searchedItem != null && this.searchedItem != '') {
      this.productService.getSearchedResult(this.searchedItem).subscribe(data => this.products = data);
    }
  }*/
}
