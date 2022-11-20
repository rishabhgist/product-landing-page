package com.jap.product.domain;

public class Product {
    private int id;
    private String name;
    private String description;
    private String category;

    public Product(int id, String name, String description, String category) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.category = category;
    }

    public Product() {
    }
}
