package com.jap.product.service;

import com.jap.product.domain.Product;

import java.util.List;

public interface IProductService {
    /**
     * Add a product to the database
     *
     * @param product The product object to be added.
     * @return The product that was added.
     */
    Product add(Product product);

    /**
     * This function returns a list of products.
     *
     * @return A list of products.
     */
    List<Product> getAll();
}
