package com.jap.product.controller;

import com.jap.product.domain.Product;
import com.jap.product.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class ProductController {
    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @PostMapping("/post")
    public ResponseEntity<?> save(@RequestBody Product product) {
        return new ResponseEntity<>(productService.add(product), HttpStatus.CREATED);
    }
}
