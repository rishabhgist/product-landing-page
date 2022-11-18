import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  URL: string = 'http://localhost:8080/api/v1/addItem'
  
  post(item: Product) {
    return this.http.post(this.URL, item);
  }
  getAll() {
    return this.http.get<Array<Product>>(this.URL);
  }
}
