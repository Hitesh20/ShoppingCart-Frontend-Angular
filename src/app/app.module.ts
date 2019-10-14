import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component';
import {ProductsService} from './products.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { BasicAuthHttpInterceptorService} from './basic-auth-http-interceptor.service';
import {AuthguardService} from './authguard.service';
import {AuthenticationService} from './authentication.service';
import {RegistrationService} from './registration.service';
import { OrderHistoryComponent } from './order-history/order-history.component';
import {CartService} from './cart.service';
import { MyAccountComponent } from './my-account/my-account.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddProductComponent } from './add-product/add-product.component';
import { NgxPopperModule} from 'ngx-popper';
import {BsDropdownDirective, BsDropdownModule} from 'ngx-bootstrap';
import { EditProductComponent } from './edit-product/edit-product.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ProductListComponent,
    ProductDetailComponent,
    UserCartComponent,
    LoginComponent,
    RegistrationComponent,
    FooterComponent,
    LogoutComponent,
    OrderHistoryComponent,
    MyAccountComponent,
    PageNotFoundComponent,
    AddProductComponent,
    BsDropdownDirective,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    /*{
      provide: HTTP_INTERCEPTORS, useClass: BasicAuthHttpInterceptorService, multi: true
    },*/ ProductsService, RegistrationService, CartService
    ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
