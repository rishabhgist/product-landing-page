import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  post(item: any) {
    return this.http.post('http://localhost:8080/api/v1/post', item);
  }
  getAll(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>('http://localhost:8080/api/v1/getAll');
  }
}
