package com.jap.product.service;

import com.jap.product.domain.Product;
import com.jap.product.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class ProductService implements IProductService {

    private ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    /**
     * Add a product to the database
     *
     * @param product The product object to be added.
     * @return The product that was added.
     */
    @Override
    public Product add(Product product) {
        return this.productRepository.save(product);
    }

    /**
     * This function returns a list of products.
     *
     * @return A list of products.
     */
    @Override
    public List<Product> getAll() {
        return null;
    }
}
