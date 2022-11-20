package com.jap.product.controller;

import com.jap.product.service.ProductService;

public class ProductController {
    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }
}
