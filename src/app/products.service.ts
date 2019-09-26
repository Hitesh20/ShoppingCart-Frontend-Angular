import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductClass} from './ProductClass';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  private url = '../assets/data/allProducts.json';

  getAllProducts(): Observable<ProductClass[]> {
    return this.http.get<ProductClass[]>(this.url);
  }
}
