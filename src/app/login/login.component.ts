import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;

  constructor(private router: Router, private loginservice: AuthenticationService) { }
  ngOnInit() {
  }
  checkLogin() {
    this.loginservice.authenticate(this.username, this.password).subscribe(data =>  {
      this.router.navigate(['home']);
      this.invalidLogin = false;
    }, error => {
      this.invalidLogin = true;
    }
    );
  }
  /*checkLogin() {
    (this.loginservice.authenticate(this.username, this.password).subscribe(
        data => {
          this.router.navigate(['home']);
          this.invalidLogin = false;
        },
        error => {
          this.invalidLogin = true;
        }
      )
    );
  }*/

}
