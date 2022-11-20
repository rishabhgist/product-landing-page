package com.jap.product.controller;

import com.jap.product.service.ProductService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductController {
    private ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }
}
