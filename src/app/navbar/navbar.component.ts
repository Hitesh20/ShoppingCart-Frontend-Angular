import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RegistrationComponent} from '../registration/registration.component';
import {RegistrationService} from '../registration.service';
import {AuthenticationService} from '../authentication.service';
import {ProductsService} from '../products.service';
import {ProductClass} from '../ProductClass';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private role;
  private user;
  private result;
  private searchedItem: string;
  private category;
  @Output() private childEvent = new EventEmitter();
  isOff: true;
  constructor(private registrationService: RegistrationService, private loginService: AuthenticationService,
              private productService: ProductsService) { }

  ngOnInit() {
    this.registrationService.getUser().subscribe( data => {
      this.user = data;
      this.role = this.user.role;
    });
  }

  searchOnClick() {
    console.log(this.searchedItem);
    // tslint:disable-next-line:triple-equals
    if (this.searchedItem != undefined && this.searchedItem != '') {
      this.productService.getSearchedResult(this.searchedItem).subscribe(data => {
        /*const object = {
          result: undefined,
          search: undefined
        };
        object.search = this.searchedItem;*/
        this.result = data;
        // this.products = data;
        this.childEvent.emit(this.result);
      });
    }
  }
}
