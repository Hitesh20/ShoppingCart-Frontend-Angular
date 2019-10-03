import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {__param} from 'tslib';
import {ProductsService} from '../products.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private category;
  constructor(private loginService: AuthenticationService) { }

  ngOnInit() {
  }

}
