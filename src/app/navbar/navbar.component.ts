import { Component, OnInit } from '@angular/core';
import {RegistrationComponent} from '../registration/registration.component';
import {RegistrationService} from '../registration.service';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  private role;
  private user;
  constructor(private registrationService: RegistrationService, private loginService: AuthenticationService) { }

  ngOnInit() {
    this.registrationService.getUser().subscribe( data => {
      this.user = data;
      this.role = this.user.role;
    });
  }

}
