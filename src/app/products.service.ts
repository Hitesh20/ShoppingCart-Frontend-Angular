import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ProductClass} from './ProductClass';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  // private url = '../assets/data/allProducts.json';

  private url = 'http://localhost:2019';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  getAllProducts(): Observable<ProductClass[]> {
    return this.http.get<ProductClass[]>(this.url + '/products');
  }

  // tslint:disable-next-line:ban-types
  getOneProduct(id: Number) {
    return this.http.get<ProductClass>(this.url + '/product-detail/' + id);
  }
}
