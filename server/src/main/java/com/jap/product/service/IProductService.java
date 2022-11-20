package com.jap.product.service;

import com.jap.product.domain.Product;

public interface IProductService {
    /**
     * Add a product to the database
     *
     * @param product The product object to be added.
     * @return The product that was added.
     */
    Product add(Product product);
}
