import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAll();
  }
  products: Product[] = [];

  getAll() {
    this.productService.getAll().subscribe(value=> this.products = value)
  }
 
}
