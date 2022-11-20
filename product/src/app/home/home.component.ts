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
    this.productService.getAll().subscribe((value) => (this.products = value));
  }
  isSorted: boolean = false;
  sort(category: String) {
    if (!this.isSorted) {
      this.products = this.products.filter(
        (product) => product.category === category
      );
      this.isSorted = true;
    } else {
      this.productService
        .getAll()
        .subscribe((value) => (this.products = value));
      this.isSorted = false;
    }
  }
}
