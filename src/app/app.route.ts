import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import {ProductListComponent} from './product-list/product-list.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';

export const MAIN_ROUTES: Routes = [
  { path : '', redirectTo: '/home', pathMatch: 'full'},
  { path : 'home', component: HomePageComponent },
  { path : 'productList', component: ProductListComponent },
  { path : 'registration', component: RegistrationComponent },
  { path : 'login', component: LoginComponent },
  { path : 'cart', component: UserCartComponent },
  { path : 'clothing', component: UserCartComponent },
  { path : 'footwear', component: UserCartComponent },
  { path : 'electronics', component: UserCartComponent },
  { path : 'books', component: UserCartComponent }
];

